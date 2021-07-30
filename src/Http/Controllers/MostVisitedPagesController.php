<?php

namespace Pschocke\NovaPlausibleAnalytics\Http\Controllers;

use Carbon\CarbonPeriod;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Pschocke\NovaPlausibleAnalytics\PlausibleApi;

class MostVisitedPagesController extends Controller
{
    public function __invoke(Request $request)
    {
        return $this->mostVisitedPages($request);
    }

    private function mostVisitedPages($request)
    {
        $duration = $request->has('duration')
            ? $request->input('duration')
            : 'week';

        switch($duration) {
            case '1':
                $period = CarbonPeriod::create(now(), now());
                break;
            case '30':
                $period = CarbonPeriod::create(now()->subDays(30), now());
                break;
            case 'week':
                $period = CarbonPeriod::create(now()->startOfWeek(), now());
                break;
            case 'month':
                $period = CarbonPeriod::create(now()->startOfMonth(), now());
                break;
            case 'year':
                $period = CarbonPeriod::create(now()->StartOfYear(), now());
                break;
            default:
                $period = CarbonPeriod::create(now()->startOfWeek(), now());
                break;
        }

        $analyticsData = collect(app(PlausibleApi::class)->getBreakdown($period, ['event:page'], ['visitors'], 15)['results']);

        return $analyticsData->map(fn($value) => [
            'hostname' => config('services.nova-plausible.site-id'),
            'path' => $value['page'],
            'name' => $value['page'],
            'visits' => $value['visitors']
        ]);

    }
}

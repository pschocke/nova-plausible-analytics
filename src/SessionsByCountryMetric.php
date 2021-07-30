<?php

namespace Pschocke\NovaPlausibleAnalytics;

use Illuminate\Http\Request;
use Laravel\Nova\Metrics\Partition;

class SessionsByCountryMetric extends Partition
{
    public function name()
    {
        return __('Sessions by Country - Top 5 - last 30 days');
    }

    public function calculate(Request $request)
    {
        $rows = collect(app(PlausibleApi::class)->getBreakdown('30d', ['visit:country'])['results'])->take(5);

        $results = [];
        foreach ($rows as $row) {
            $results[$row['country']] = $row['visitors'];
        }

        return $this->result($results)
            ->label(function ($value) {
                switch ($value) {
                    case null:
                        return 'None';
                    default:
                        return ucfirst($value);
                }
            });
    }

    public function uriKey()
    {
        return 'plausible-sessions-by-country';
    }
}

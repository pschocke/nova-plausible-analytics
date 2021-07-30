<?php

namespace Pschocke\NovaPlausibleAnalytics;

use Carbon\CarbonPeriod;
use Illuminate\Http\Request;
use Laravel\Nova\Metrics\Value;

class VisitorsMetric extends Value
{
    public function calculate(Request $request)
    {
        $lookups = [
            1 => 'getOneDay',
            'MTD' => 'getOneMonth',
            'YTD' => 'getOneYear',
        ];

        $method = $lookups[$request->get('range')];

        $data = $this->{$method}();

        return $this
            ->result($data['result'])
            ->previous($data['previous']);
    }

    private function getOneDay()
    {
        $results = app(PlausibleApi::class)->getTimeSeries('7d', ['visitors']);
        $results = array_reverse($results['results']);

        return [
            'result' => $results[0]['visitors'],
            'previous' => $results[1]['visitors'],
        ];
    }

    private function getOneMonth()
    {
        $results = app(PlausibleApi::class)->getTimeSeries('6mo', ['visitors']);
        $results = array_reverse($results['results']);

        return [
            'result' => $results[0]['visitors'],
            'previous' => $results[1]['visitors'],
        ];
    }

    private function getOneYear()
    {
        $results = app(PlausibleApi::class)->getAggregateForYear(now());
        $prevResults = app(PlausibleApi::class)->getAggregateForYear(now()->subYear());

        return [
            'result' => $results['results']['visitors']['value'],
            'previous' => $prevResults['results']['visitors']['value'],
        ];
    }

    public function ranges()
    {
        return [
            1 => __('Today'),
            'MTD' => __('Month To Date'),
            'YTD' => __('Year To Date'),
        ];
    }

    public function uriKey()
    {
        return 'plausible-visitors';
    }
}

<?php

namespace Pschocke\NovaPlausibleAnalytics;

use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Http;

class PlausibleApi
{
    private string $basePath;

    public function __construct()
    {
        $this->basePath = config('services.nova-plausible.domain') . 'api/v1/stats/';
    }

    public function getTimeSeries($period = '7d', $metrics = ['pageviews']): array
    {
        return $this
            ->baseRequest()
            ->get($this->timeSeriesRequest($period, $metrics))
            ->json();
    }

    public function getAggregate($period = '7d'): array
    {
        return $this
            ->baseRequest()
            ->get($this->aggregateRequest($period))
            ->json();
    }

    public function getBreakdown($period = '7d', $properties = [], $metrics = ['visitors'], $limit = 15): array
    {
        return $this
            ->baseRequest()
            ->get($this->breakdownRequest($period, $properties, $metrics, $limit))
            ->json();
    }

    public function getAggregateForYear(Carbon $year): array
    {
        $period = CarbonPeriod::create($year->startOfYear()->format('Y-m-d'), $year->endOfYear()->format('Y-m-d'));

        return $this->getAggregate($period);
    }

    public function breakdownRequest($period = '7d', $properties = [], $metrics = [], $limit = 15): string
    {
        return
            $this->basePath .
            'breakdown?site_id=' . config('services.nova-plausible.site-id') .
            $this->getPeriodForUrl($period) .
            '&property=' . implode(', ', $properties) .
            '&metrics=' . implode(',', $metrics) .
            '&limit=' . $limit
        ;
    }

    private function aggregateRequest($period = '7d'): string
    {
        return
            $this->basePath .
            'aggregate?site_id=' . config('services.nova-plausible.site-id') .
            $this->getPeriodForUrl($period);
    }

    private function timeSeriesRequest($period = '7d', $metrics = []): string
    {
        return
            $this->basePath .
            'timeseries?site_id=' . config('services.nova-plausible.site-id') .
            $this->getPeriodForUrl($period) .
            '&metrics=' . implode(',', $metrics);
    }

    private function getPeriodForUrl($period): string
    {
        if ($period instanceof CarbonPeriod) {
            return '&period=custom&date=' . implode(',',
            [
                $period->getStartDate()->format('Y-m-d'),
                $period->getEndDate()->format('Y-m-d'),
            ]);
        }

        return '&period=' . $period;
    }

    private function baseRequest(): PendingRequest
    {
        return HTTP::withToken(config('services.nova-plausible.api-key'));
    }
}

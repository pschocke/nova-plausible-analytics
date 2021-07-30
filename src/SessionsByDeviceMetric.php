<?php

namespace Pschocke\NovaPlausibleAnalytics;

use Illuminate\Http\Request;
use Laravel\Nova\Metrics\Partition;

class SessionsByDeviceMetric extends Partition
{
    public function name()
    {
        return __('Sessions by Device - last 30 days');
    }

    public function calculate(Request $request)
    {
        $rows = app(PlausibleApi::class)->getBreakdown('30d', ['visit:device'])['results'];

        $results = [];
        foreach ($rows as $row) {
            $results[$row['device']] = $row['visitors'];
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
        return 'plausible-sessions-by-device';
    }
}

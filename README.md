# Plausible Analytics Integration with Nova

Display statistics from Plausible analytics directly in Laravel Nova

This package is highly inspired by the [Google Analytics Integration Package from Tighten](https://github.com/tighten/nova-google-analytics) and shares some if its code.

## Installation
You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require pschocke/nova-plausible-analytics
```

### API configuration

Get your Plausible API key (by logging into your account and navigating to the settings) and configure your `.env` file:
```dotenv
NOVA_PLAUSIBLE_API_KEY= #Your API key
NOVA_PLAUSIBLE_SITE_ID= #The ID you've used for the site in plausible
```

Next you need to add the following code snipped to your services configuration file (`config/services.php`)

```php
return [
    //...
    'nova-plausible' => [
        'domain' => env('NOVA_PLAUSIBLE_DOMAIN', 'https://plausibe.io/'),
        'api-key' => env('NOVA_PLAUSIBLE_API_KEY'),
        'site-id' => env('NOVA_PLAUSIBLE_SITE_ID'),
    ]
];
```

##Usage
ou must register the cards you want to display with Nova. This is typically done in the `cards` method of the `NovaServiceProvider`.
```php
// in app/Providers/NovaServiceProvider.php

// ...

public function cards()
{
    return [
        // ...
        new \Pschocke\NovaPlausibleAnalytics\VisitorsMetric,
        new \Pschocke\NovaPlausibleAnalytics\SessionsByDeviceMetric,
        new \Pschocke\NovaPlausibleAnalytics\SessionsByCountryMetric,
        new \Pschocke\NovaPlausibleAnalytics\MostVisitedPagesCard,
    ];
}
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email patrick@ausbildung-ms.de instead of using the issue tracker.

## Credits

- [Patrick Schocke](https://github.com/pschocke)
- [All Contributors](https://github.com/pschocke/nova-plausible-analytics/graphs/contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

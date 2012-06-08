# jQuery Expected

jQuery Expected is a simple way to turn this:

    if ($('selector').length !== 1) {
        // handle error
    } else {
        $('selector') // do something
    }

into this:

    $('selector').expected(1, function () {
        // handle error
    }) // do something
# jQuery Expected

jQuery Expected is inspired by .NET's [Enumerable.Single](http://msdn.microsoft.com/en-us/library/system.linq.enumerable.single.aspx). It takes in an expected value and returns the collection if the number of items in the selector array matches the expected value. It throws an Error if the length of the array doesn't match.

* When the expected value doesn't match, an Error of type ExpectedValueError is thrown. ExpectedValueError is included in the global namespace.

example:

    try {
        $('selector').expected(1).html('hello world');
    } catch (ex) {
        if (ex instanceof ExpectedValueError) {
            alert('Selector did not have expected length of 1');
        } else {
            console.log(ex);
        }
    }
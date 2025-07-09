# Reflection

## Were your predictions accurate?
Yes, once I wrote the arry of objects it was easy to see what the results would be.

## What surprised you about your week?
I like riding my bike more than talking on the ham radio.

## Which higher order function was most useful and why?
I think filter is very useful but they are really powerfull when you chain them together. After writing the following function:

```
function myFilterFunction(passedFunction) {
   return myWeek.filter(passedFunction);
}
```

I was wondering if it could be written to accept a function and myWeek both as arguments. I gave it a test and it appears to work fine.

```
function myFilterFunction(log, passedFunction) {
   return log.filter(passedFunction);
}

// call myFilterFunction with a function that filters for social activities
myFilterFunction(myWeek, weekEntry => weekEntry.category === "social");
```
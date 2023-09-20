# green-platypus

> *"Write then clean.*

WEDNESDAY DEADLINE


# Code to change pages:

In this part:
> $(document).ready(function() {
> 
> ...
> 
> }

Add this code to change screen (inside the ... above):
> $('[css button selection, for example #btn').on("click", function() {
>
> window.location.href = "[link to the page, for example buy.html]";
>
> });

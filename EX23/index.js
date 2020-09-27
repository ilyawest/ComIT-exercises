let hour = Number (prompt ("Enter the current hour",  ))

if (hour<0 || hour>23)
{
    alert("Wrong input")
}

if (hour<8 && hour>0 || hour > 18 && hour <23 || hour == 18|| hour==23)
{
    alert("Office is closed")
}

if (hour>8 && hour <18 )
{
    alert("Welcome")
}


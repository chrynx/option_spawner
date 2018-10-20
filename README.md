## Option Spawner

This is a simple ReactJS component that allows you to spawn date options.

## Usage:

    please.render.options.from(_fromMonth_,_fromYear_).to(_toMonth_,_toYear_).using.select(_selectID_);

fromMonth = The month that you wish the options to start with

    _type = string_
    _default = "JAN"_
    _e.g. "JAN","FEB","MAR"..._

fromYear = The year that you wish the options to start with

    _type = number_
    _default = 1970_

toMonth = The month that you wish the options to end with

    _type = string_
    _default = current month_
    _e.g. "JAN","FEB","MAR"..._

toYear = The year that you wish the options to end with

    _type = number_
    _default = current year_
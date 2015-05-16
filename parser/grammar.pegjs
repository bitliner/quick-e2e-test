// test it on: http://pegjs.org/online

start = scenario

scenario = "when" space actor space a:actions "," space "then" space c:conditions space* { return {actions:a, conditions: c} }

actor="users"/"user"



actions = a1:action b:other_action* {return [a1].concat(b)} / action 
other_action = space separator space a:action { return a }
action = clickAction / sendAction

clickAction=a:click space "on" space o:string  {return {name:a, obj: o} }

sendAction=a:send space o:string  space "to" space l:string  {return {name:a,obj:o, location:l} }


selector = digits:[A-z \.\-]+ {return digits.join('')}
click="clicks"/"click"
send="sends" {return "send"}/"send" {return "send"}


conditions = c1:condition cs:other_conditions* {return [c1].concat(cs)} / condition

other_conditions = space separator space a:condition { return a }
condition = left:[A-z]+ space op:[A-z]+ space right:value  {return {left:left.join(''), op:op.join(''), right:right}}

separator = "and"
preposition="on"/"to"/"in"
space = digits:[ +] 

value=integer/string
integer=i:[0-9]+ {return i}
string=string_delimiter r:raw_string string_delimiter {return r;}
string_delimiter="'"
raw_string=s:[A-z \.\-\/]+ {return s.join('');}
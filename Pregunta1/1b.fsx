type Church = 
    | Cero
    | Suc of Church

let rec calcchurch church = // Church -> int
    match church with
    | Cero -> 0
    | Suc church -> 1 + (calcchurch church)

let rec suma church1 church2 = // Church -> Church -> Church
    match church1 with
    | Cero -> church2
    | Suc church1 -> Suc(suma church1 church2)

let rec multiplicacion church1 church2 = // Church -> Church -> Church
    match church1 with
    | Cero -> Cero
    | Suc church1 -> suma church2 (multiplicacion church1 church2)

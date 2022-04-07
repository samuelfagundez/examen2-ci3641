open System

let rec F34 n =
    if n >= 0
        then
            if n >= 12 then F34 (n - 4) + F34 (n - 8) + F34 (n - 12)
            else n
        else -1

printfn "%s" ((DateTime.Now).ToString "HH:mm:ss.fff")
printfn "%d" (F34 25)
printfn "%s" ((DateTime.Now).ToString "HH:mm:ss.fff")
open System

let rec obtenerCasosBase n a b c = 
    if n - 12 <= 0 then [| c; b; a |]
    else obtenerCasosBase (n-4) (n-4) (n-8) (n-12)

let rec obtenerNIteraciones n count =
    if n - 4 <= 12 then count
    else obtenerNIteraciones (n - 4) (count + 1)

let F34 n = 
    if n >= 0
        then
            if n >= 12 
            then 
                let casosBase = obtenerCasosBase n 0 0 0
                let nIteraciones = obtenerNIteraciones n 0
                let caso_base_3 = casosBase[0]
                let caso_base_2 = casosBase[1]
                let caso_base_1 = casosBase[2]
                let rec F34_aux caso_base_3 caso_base_2 caso_base_1 i =
                    if i = nIteraciones then caso_base_1 + caso_base_2 + caso_base_3
                    else F34_aux caso_base_2 caso_base_1 (caso_base_1 + caso_base_2 + caso_base_3) (i + 1)
                F34_aux caso_base_3 caso_base_2 caso_base_1 0
            else n
        else -1

printfn "%s" ((DateTime.Now).ToString "HH:mm:ss.fff")
printfn "%d" (F34 10000)
printfn "%s" ((DateTime.Now).ToString "HH:mm:ss.fff")
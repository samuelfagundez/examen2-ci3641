open System

let obtenerCasosBase n = 
    let mutable aux = n
    let mutable a = 0
    let mutable b = 0
    let mutable c = 0
    while aux - 12 > 0 do
        a <- aux - 4
        b <- aux - 8
        c <- aux - 12
        aux <- aux - 4
    [| c; b; a |]

let obtenerNIteraciones n =
    let mutable count = 0
    let mutable aux = n
    while aux - 4 > 12 do
        aux <- aux - 4
        count <- count + 1
    count

let F34 n = 
    if n >= 0
        then
            if n >= 12 
            then 
                let casosBase = obtenerCasosBase n
                let nIteraciones = obtenerNIteraciones n
                let mutable caso_base_3 = casosBase[0]
                let mutable caso_base_2 = casosBase[1]
                let mutable caso_base_1 = casosBase[2]
                let mutable aux_caso_3 = 0
                let mutable aux_caso_2 = 0
                for i in 1 .. nIteraciones do
                    aux_caso_2 <- caso_base_1
                    aux_caso_3 <- caso_base_2
                    caso_base_1 <- (caso_base_1 + caso_base_2 + caso_base_3)
                    caso_base_2 <- aux_caso_2
                    caso_base_3 <- aux_caso_3
                caso_base_1 + caso_base_2 + caso_base_3
            else n
        else -1

printfn "%s" ((DateTime.Now).ToString "HH:mm:ss.fff")
printfn "%d" (F34 10000)
printfn "%s" ((DateTime.Now).ToString "HH:mm:ss.fff")
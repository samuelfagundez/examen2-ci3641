type Arbol =
    | Hoja of int
    | Rama of int * Arbol * Arbol

let rec esMinHeapBalanceado tree =
    match tree with
    | Hoja _ -> true
    | Rama (n, Hoja _, Hoja _) -> true
    | Rama (n, Hoja _, Rama (n2, l2l, l2r)) -> n < n2 && esMinHeapBalanceado (Rama (n2, l2l, l2r))
    | Rama (n, Rama (n1, l1l, l1r), Hoja _) -> n < n1 && esMinHeapBalanceado (Rama (n1, l1l, l1r))
    | Rama (n, Rama (n1, l1l, l1r), Rama (n2, l2l, l2r)) -> n < n1 && n < n2 && esMinHeapBalanceado (Rama (n1, l1l, l1r)) && esMinHeapBalanceado (Rama (n2, l2l, l2r))
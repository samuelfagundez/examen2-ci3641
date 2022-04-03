type Arbol =
    | Leaf of int
    | Branch of int * Arbol * Arbol

let rec esMinHeapBalanceado tree =
    match tree with
    | Leaf _ -> true
    | Branch (n, Leaf _, Leaf _) -> true
    | Branch (n, Leaf _, Branch (n2, l2l, l2r)) -> n < n2 && esMinHeapBalanceado (Branch (n2, l2l, l2r))
    | Branch (n, Branch (n1, l1l, l1r), Leaf _) -> n < n1 && esMinHeapBalanceado (Branch (n1, l1l, l1r))
    | Branch (n, Branch (n1, l1l, l1r), Branch (n2, l2l, l2r)) -> n < n1 && n < n2 && esMinHeapBalanceado (Branch (n1, l1l, l1r)) && esMinHeapBalanceado (Branch (n2, l2l, l2r))
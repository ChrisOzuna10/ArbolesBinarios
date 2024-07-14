import Node from "./Node.js";
class BST {
    #root;

    constructor() {
        this.#root = null
    }
    add(value) {
        if (this.#root === null) {
            this.#root = new Node(value)
            return this.#root != null
        } else
            return this.insertNode(this.#root, value)
    }

    insertNode(node, value) {
        if (value.model < node.value.model) {
            if (node.left === null) {
                node.left = new Node(value)
                if (node.left != null)
                    return true
            } else
                return this.insertNode(node.left, value)
        } else {
            if (node.right == null) {
                node.right = new Node(value)
                return node.right != null
            } else
                return this.insertNode(node.right, value)
        }
    }

    iniciarRecorrido(metodo) {
        return this.recorrido(this.#root, metodo)
    }

    recorrido(node, metodo) {
        if (node === null)
            return

        this.recorrido(node.left, metodo)

        metodo(node.value)

        this.recorrido(node.right, metodo)
    }

    iniciarBusqueda(value) {
        return this.busqueda(this.#root, value);
    }

    busqueda(node, value) {
        if (node === null) return null;
        if (node.value.model === value)
            return node.value;
        if (value < node.value.model)
            return this.busqueda(node.left, value);
        else
            return this.busqueda(node.right, value);
    }

    encontrarMinimo() {
        return this.minimo(this.#root)
    }
    minimo(node) {
        if (node === null || node.left === null)
            return node.value
        else
            return this.minimo(node.left)
    }

    encontrarMaximo() {
        return this.maximo(this.#root)
    }
    maximo(node) {
        if (node === null || node.right === null)
            return node.value
        else
            return this.maximo(node.right)
    }
}
export default BST;
const usuario = "frifayer";
const password = "frifayer";
let saldo = 2000;

function validacion(u, p) {
    if (u == usuario && p == password) {
        return true;
    } else {
        return false;
    }
}

function login(UsuarioI, PasswordI) {
    UsuarioI = prompt("Ingrese su nombre de usuario:");
    PasswordI = prompt("Ingrese contraseña:");
    return validacion(UsuarioI, PasswordI);
}

function retirar(valor) {
    if (valor > saldo) {
        console.log("La cantidad que deseas retirar es mayor a la disponible, recuerda que tu saldo es:", saldo);
    } else {
        saldo = saldo - valor;
        console.log("Retiro realizado con éxito, ahora tu saldo es:", saldo);
    }
}

function depositar(valor) {
    if (valor <= 0) {
        console.log("El valor que ha ingresado no es valido");
    } else {
        saldo = saldo + valor;
        console.log("La consignación se realizo con éxito, ahora su saldo es de:", saldo);
    }
}

function accion(opcion) {
    if (opcion == 1) {
        valor = prompt("Digite el valor a retirar");
        return retirar(valor);
    } else if (opcion == 2) {
        valor = prompt("Digite el valor a depositar");
        return depositar(valor);
    } else {
        console.log("La opción que ha escogido no existe");
    }
}

function inicializar() {
    if (login()) {
        opcion = prompt("Ingresa la acción deseada: 1. Retirar 2. Depositar");
        return accion(opcion);
    } else {
        console.log("Usuario o contraseña incorrecta.");
    }
}

inicializar();

// Debido a que en js no se puede retornar mas de un valor en una función me toco hacer visible los resultados en la misma función (por eso el inicializador no requiere console.log)

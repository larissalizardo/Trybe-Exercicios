//switch -- case a estrutura switch/case é utilizada quando queremos executar diferentes ações.

//uma outra forma de criar condições.

//default: //Se nenhum valor satisfizer os casos listados, é executado o código em default.

//break; Com o break se um case for atendido, as outras condições não serão verificadas.


let trafficLight = "vermelho";

switch (trafficLight) {
    case "vermelho":
    console.log("pare")
    break;             

    case "Amarelo":
    console.log("atenção")
    break;

    case "verde":
    console.log("siga")
    break;

    default:           
    console.log("valor não identificado")
}

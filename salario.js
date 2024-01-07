import ReadLine from "readline-sync"

const input = (text) => {
    return ReadLine.question(text)
}

const year = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]

const minimum_wage_per_year = [510, 545, 622, 678, 724, 788, 880, 937, 954, 998, 1045]

const inflation_per_year = [5.91, 6.5, 5.84, 5.91, 6.41, 10.67, 6.29, 2.95, 3.75, 4.31, 4.52]

function main() {
    console.log("Escolha uma das alternativas:\n")

    console.log("1 - Listar os salários mínimos de 2010 à 2020")
    console.log("2 - Listar o índice IPCA de 2010 à 2020")
    console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n")

    let user_choice = Number(input("Digite o número da sua escolha: "))

    switch (user_choice) {
        case 1:
            for (let i = 0; i < year.length; i++) {
                console.log("\nAno: ".padEnd(40, ".") + year[i])
                console.log("Salário mínimo: ".padEnd(39, ".") + `R$${minimum_wage_per_year[i].toFixed(2).replace(".", ",")}`)
            }

            break
        case 2:
            for (let i = 0; i < year.length; i++) {
                console.log("\nAno: ".padEnd(25, ".") + year[i])
                console.log("Inflação IPCA: ".padEnd(24, ".") + `${inflation_per_year[i].toFixed(2).replace(".", ",")}%`)
            }

            break
        case 3:
            for (let i = 0; i < year.length; i++) {

                let difference = minimum_wage_per_year[i] - (i - 1 < 0 ? 0 : minimum_wage_per_year[i - 1])
                let growth = i - 1 < 0 ? 0 : (difference / minimum_wage_per_year[i - 1] * 100)

                console.log("\nAno: ".padEnd(40, ".") + year[i])
                console.log("Salário mínimo: ".padEnd(39, ".") + `R$ ${minimum_wage_per_year[i].toFixed(2).replace(".", ",")}`)
                console.log("Crescimento Salarial: ".padEnd(39, ".") + growth.toFixed(2).replace(".", ",") + "%")
                console.log("Inflação IPCA: ".padEnd(39, ".") + `${inflation_per_year[i].toFixed(2).replace(".", ",")}%`)
            }
            break
        default:
            console.log("Opção Inválida!")
            break
    }

}

main()
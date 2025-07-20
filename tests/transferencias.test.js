import http from "k6/http"
import { sleep, check } from "k6"
import { obterToken } from "../helpers/autenticacao.js"
import { pegarBaseUrl } from "../utils/variaveis.js"

export const options = {
  iterations: 1
}

export default function () {
  const token = obterToken()

  const url = pegarBaseUrl() + "/transferencias"

  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    valor: 11,
    token: ''
  })

  const params = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token
    },
  }
  const res = http.post(url, payload, params)

  check(res, {
    'Validar que o status é 201': (r) => r.status === 201,
  })
  sleep(1)
}

'use strict'

export const getContatos = async (telefoneContato) => {
    const url = `http://localhost:8080/v1/whatsapp/telefone/${telefoneContato}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    
    return data

}
function getBotResponse(input) {
    //rock paper scissors
    if (input == "bem e tu") {
        return "também estou bem obrigado";
    } else if (input == "Como te chamas?") {
        return "Meu nome é M ";
    } else if (input == "Preciso de ajuda") {
        return "Do que precisa";
    }


    if (input == "Estou bem e voce") {
        return "Normal";
    } else if (input == "Normal porque?") {
        return "Não dorme muito bem ";
    } else if (input == "podes me ajudar") {
        return "sim posso";
    }

    if (input == "Bem e tu") {
        return "também estou bem obrigado";
    } else if (input == "qual é o teu nome") {
        return "Meu nome é M ";
    } else if (input == "podes me ajudar") {
        return "sim posso";
    }

    // Simple responses
    if (input == "De amor") {
        return "o que aconteceu com o senhor!";
    } else if (input == "A minha mulher me traiu") {
        return "lamemtou muito!";
    } else {
        return "Desculpa não percebo!";
    }
}
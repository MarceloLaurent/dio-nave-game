function start() { // Inicio da função start()

	$("#inicio").hide();

	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");


	//Principais variáveis do jogo

	var jogo = {}
	var TECLA = {
		W: 87,
		S: 83,
		D: 68,
		UpArrow: 38,
		DownArrow: 40
	}

	jogo.pressionou = [];

	//Verifica se o usuário pressionou alguma tecla	

	$(document).keydown(function (e) {
		jogo.pressionou[e.which] = true;
	});


	$(document).keyup(function (e) {
		jogo.pressionou[e.which] = false;
	});


	//Game Loop

	jogo.timer = setInterval(loop, 20);

	function loop() {

		movefundo();
		movejogador();


		//Função que movimenta o fundo do jogo

		function movefundo() {

			esquerda = parseInt($("#fundoGame").css("background-position"));
			$("#fundoGame").css("background-position", esquerda - 1);

		} // fim da função movefundo()

		function movejogador() {
	
			if (jogo.pressionou[TECLA.W] || jogo.pressionou[TECLA.UpArrow]) {
				var topo = parseInt($("#jogador").css("top"));
				
				if(topo > 12) {
					$("#jogador").css("top",topo-10); 
				}
			
			}
			
			if (jogo.pressionou[TECLA.S] || jogo.pressionou[TECLA.DownArrow]) {
				
				var topo = parseInt($("#jogador").css("top"));

				if(topo < 412) {
					$("#jogador").css("top",topo+10);	
				}

			}
			
			if (jogo.pressionou[TECLA.D]) {
				
				//Chama função Disparo	
			}
		
			} // fim da função movejogador()

	} // Fim da função loop()

} // Fim da função start
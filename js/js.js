function start() { // Inicio da função start()

	$("#inicio").hide();

	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");


	//Principais variáveis do jogo

	var jogo = {}
	var velocidade = 5;
	var posicaoY = parseInt(Math.random() * 334);
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
		moveamigo();
		moveinimigo1();
		moveinimigo2();

		//Função que movimenta o fundo do jogo

		function movefundo() {

			esquerda = parseInt($("#fundoGame").css("background-position"));
			$("#fundoGame").css("background-position", esquerda - 1);

		} // fim da função movefundo()

		function movejogador() {

			if (jogo.pressionou[TECLA.W] || jogo.pressionou[TECLA.UpArrow]) {
				var topo = parseInt($("#jogador").css("top"));

				if (topo > 12) {
					$("#jogador").css("top", topo - 10);
				}

			}

			if (jogo.pressionou[TECLA.S] || jogo.pressionou[TECLA.DownArrow]) {

				var topo = parseInt($("#jogador").css("top"));

				if (topo < 412) {
					$("#jogador").css("top", topo + 10);
				}

			}

			if (jogo.pressionou[TECLA.D]) {

				//Chama função Disparo	
			}

		} // fim da função movejogador()

		function moveinimigo1() {

			posicaoX = parseInt($("#inimigo1").css("left"));
			$("#inimigo1").css("left", posicaoX - velocidade);
			$("#inimigo1").css("top", posicaoY);

			if (posicaoX <= 0) {
				posicaoY = parseInt(Math.random() * 312);
				$("#inimigo1").css("left", 694);
				$("#inimigo1").css("top", posicaoY);
			}

		} //Fim da função moveinimigo1()

		function moveinimigo2() {
			posicaoX = parseInt($("#inimigo2").css("left"));
			$("#inimigo2").css("left", posicaoX - 3);

			if (posicaoX <= 0) {

				$("#inimigo2").css("left", 775);

			}
		} // Fim da função moveinimigo2()

		function moveamigo() {
	
			posicaoX = parseInt($("#amigo").css("left"));
			$("#amigo").css("left",posicaoX+1);
						
				if (posicaoX>906) {
					
				$("#amigo").css("left",0);
							
				}
		
		} // fim da função moveamigo()

	} // Fim da função loop()

} // Fim da função start
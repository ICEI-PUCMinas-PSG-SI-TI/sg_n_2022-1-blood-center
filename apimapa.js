
var map = L.map('map').setView([-12.996350,-38.490510], 4);

var marker = L.marker([-12.996350,-38.490510]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

marker.bindPopup("<b>Fundação De Hematologia E Hemoterapia Da Bahia - HEMOBA</b><br>Endereço: Ladeira do Hospital Geral, s/n - 2º andar - Brotas<br>CEP: 40286-240 <br>Telefone: (71) 3116-5690<br>E-mail: direg.hemoba@hemoba.ba.gov.br").openPopup();


//segundo hemocentro
var marker = L.marker([-9.672650,-35.758310]).addTo(map);

marker.bindPopup("<b>Centro de Hematologia e Hemoterapia de Alagoas - HEMOAL</b><br>Endereço: Av. Jorge de Lima, nº 58 - Trapiche da Barra,<br>CEP: 57010-300<br>Telefone: (82) 3315-2102<br>E-mail: hemoal@saude.al.gov.br").openPopup();


// terceiro hemocentro
var marker = L.marker([-10.027910, -37.561990]).addTo(map);

marker.bindPopup("<b>Centro de Hemoterapia de Sergipe - HEMOSE</b><br>Endereço: Av. Tancredo Neves, s/nº - Capuxo<br> CEP: 49080-470<br>Telefone: (79) 3225-8003/3243-8065<br>E-mail: claudio.santos.fhs@gmail.com").openPopup();


//quarto hemocentro 
var marker = L.marker([-12.436840, -39.263110]).addTo(map);

marker.bindPopup("<b>Centro De Hematologia E Hemoterapia Da Paraíba - HEMOÍBA</b><br>Endereço: Av. D. Pedro II, 1119 - Centro<br>CEP: 58013-420<br>Telefone: (83) 3218-5690/3218-7601<br>E-mail: hemocentrodaparaiba@yahoo.com.br").openPopup();


//quinto hemocentro 
var marker = L.marker([-2.144190, -46.129300]).addTo(map);

marker.bindPopup("<b>Centro de Hematologia e Hemoterapia do Maranhão - HEMOMAR</b><br>Endereço: Rua 5 de Janeiro, s/nº - Jordoá<br>CEP: 65040-450<br>Telefone: (98) 3216-1139/3216-1100/1106<br>E-mail: hemomar_ma@yahoo.com.br").openPopup();


//sexto hemocentro 
var marker = L.marker([-6.666470, -37.397970]).addTo(map);

marker.bindPopup("<b>Centro de Hematologia e Hemoterapia do Rio Grande do Norte - HEMONORTE</b><br>Endereço: Av. Alexandrino de Alencar, 1.800 - Tirol<br>CEP: 59015-350<br>Telefone: (84) 3232-6701<br>E-mail: hemodirecaogeral@rn.gov.br").openPopup();




//setimo hemocentro 
var marker = L.marker([-5.932610, -42.112190]).addTo(map);

marker.bindPopup("<b>Centro de Hematologia e Hemoterapia do Piauí - HEMOPI</b><br>Endereço: Rua 1º de Maio, 235 - Centro/Sul<br>CEP: 64.001-430<br>Telefone: (86) 3221- 8319/3221-8320<br>E-mail: hemopi@hemopi.pi.gov.br").openPopup();




//oitavo hemocentro 
var marker = L.marker([-4.272680, -41.769600]).addTo(map);

marker.bindPopup("<b>Fundação de Hematologia e Hemoterapia de Pernambuco - HEMOPE</b><br>Endereço: Av. Ruy Barbosa, 375 - Graças<br>CEP: 52011-040<br>Telefone: (81) 3182 4912<br>E-mail: presidencia@hemope.pe.gov.br").openPopup();




//nono hemocentro 
var marker = L.marker([-3.646960, -39.455570]).addTo(map);

marker.bindPopup("<b>Centro de Hematologia e Hemoterapia do Ceará - HEMOCE</b><br>Endereço: Av. José Bastos, 3.390 - Rodolfo Teófilo<br>CEP: 60.431-086 - Fortaleza<br>Telefone: (85) 3101-2275<br>E-mail: diretoria@hemoce.ce.gov.br").openPopup();



//decimo hemocentro 
var marker = L.marker([-16.249350, -47.952730]).addTo(map);

marker.bindPopup("<b>Centro De Hemoterapia E Hematologia De Goiás - HEMOGO</b><br>Endereço: Av. Anhanguera 5.195 - Setor Coimbra<br>CEP: 74.535-010 <br>Telefone: (62) 3201-4585<br>E-mail: maurosilvahemogo@hotmail.com").openPopup();



//decimo primeiro hemocentro 
var marker = L.marker([-30.063240, -51.178800]).addTo(map);

marker.bindPopup("<b>Hemocentro Do Estado Do Rio Grande Do Sul - HEMORGS</b><br>Endereço: Av. Bento Gonçalves, nº 3722 - Partenon<br>CEP: 90650-001 <br>Telefone: (51) 3288-4069/4090<br> E-mail: hemorrede@fepps.rs.gov.br").openPopup();



//12 hemocentro 
var marker = L.marker([-27.589360, -48.551580]).addTo(map);

marker.bindPopup("<b>Centro de Hematologia e Hemoterapia de Santa Catarina - HEMOSC</b><br>Endereço: Av. Othon Gama D Eça, 756 - Praça D. Pedro I - Centro<br>CEP: 88015-240 <br>Telefone: (48)3251-9800/3251-9788<br>E-mail: secretaria@fns.hemosc.org.br").openPopup();



//13 hemocentro 
var marker = L.marker([-25.424900, -49.257590]).addTo(map);

marker.bindPopup("<b>Centro de Hematologia e Hemoterapia do Paraná - HEMEPAR</b><br>Endereço: Travessa Joao Prosdocimo,145 - Alto da XV <br>CEP: 80.045-145 <br>Telefone: (41) 3281-4000/3281-4024<br>E-mail: hemepar@pr.gov.br").openPopup();




//14 hemocentro 
var marker = L.marker([-23.037256, -49.157170]).addTo(map);

marker.bindPopup("<b>Fundação Pró-Sangue Hemocentro de São Paulo</b><br>Rua Dr. Ovídio Pires de Campos, 255 - 2º andar - sala 804 - Cerqueira César<br>CEP: 05403-905<br>Telefone: (11) 3061- 5544/4573-7645 R: 345<br>E-mail: dir.adm@prosangue.sp.gov.br").openPopup();




//15 hemocentro 
var marker = L.marker([-23.595540, -46.644960]).addTo(map);

marker.bindPopup("<b>Hemocentro da UNIFESP</b><br>Rua Doutor Diogo De Faria, 824 - Vila Clementino<br>CEP: 04037-002<br>Telefone: (11) 5539-7289/5539-2804/5576-4240<br>E-mail: jobordin@unifesp.br").openPopup();




//16 hemocentro 
var marker = L.marker([-20.827670, -49.400060]).addTo(map);

marker.bindPopup("<b>Hemocentro de São José do Rio Preto</b><br>Av. Jamil Feres Kfouri, 80 - Jardim Panorama<br>CEP: 15091-240<br>Telefone: (17) 3201-5053<br>E-mail: hemo.administracao@hospitaldebase.com.br").openPopup();




//17 hemocentro 
var marker = L.marker([-23.962430, -46.321330]).addTo(map);

marker.bindPopup("<b>Hemocentro de Santos</b><br>Endereço: Rua Osvaldo Cruz 197 - Boquerão Santos<br>CEP: 11045-904 <br>Telefone: (13) 3233-4265<br>E-mail: drs4-hemosantos@saude.sp.gov.br").openPopup();



//20 hemocentro 
var marker = L.marker([-3.099370,-60.026670]).addTo(map);

marker.bindPopup("<b>Fundação de Hematologia e Hemoterapia do Amazonas- HEMOAM</b><br>Endereço: AV. Constantino Neri, Nº 4.397 - Chapada<br>CEP: 69.050-001<br>Telefone: (92) 3655-0100/3655-0226/3656-0225<br>E-mail: presidencia@hemoam.am.gov.br, hemoam@hemoam.am.gov.br").openPopup();



//21 hemocentro 
var marker = L.marker([2.841680, -60.670960]).addTo(map);

marker.bindPopup("<b>Centro de Hemoterapia e Hematologia de Roraima - HEMORAIMA</b><br>Endereço: Av. Brigadeiro Eduardo Gomes, 3418 - Campos do Paricarana<br>CEP: 69.310-005 <br>Telefone: (95) 2121-0859 /2121-0560<br>E-mail: hemoraima@yahoo.com.br").openPopup();



//22 hemocentro 
var marker = L.marker([-1.462300,-48.488260]).addTo(map);

marker.bindPopup("<b>Fundação Centro de Hemoterapia e Hematologia do Pará - HEMOPA</b><br>Endereço: Tv. Padre Eutiquio, 2109 - Batista Campos<br>CEP: 66.033-000<br>Telefone: (91) 3225-2404/3242-6905 ramal: 338/339<br>E-mail: presidencia.hemopa@hemopa.pa.gov.br").openPopup();




//23 hemocentro 
var marker = L.marker([-9.953700,-67.818900]).addTo(map);

marker.bindPopup("<b>Centro de Hematologia e Hemoterapia do Acre - HEMOACRE</b><br>Endereço: Av. Getúlio Vargas, nº 2787 - Bosque<br>CEP: 69.900-607<br>Telefone: (68) 3228-1500/3228-1494<br>E-mail: hemoacre.saude@ac.gov.br").openPopup();




//24 hemocentro 
var marker = L.marker([-10.157180,-48.325560]).addTo(map);

marker.bindPopup("<b>Hemocentro Coordenador de Palmas - HEMOTO</b><br>Endereço: Qd. 301 Norte, conj.02, Lt. 01<br>CEP: 77.001-214<br>Telefone: (63) 3218-3285/3287<br>E-mail: hemocentro@saude.to.gov.br").openPopup();




//25 hemocentro
var marker = L.marker([-8.736430,-63.884830]).addTo(map);

marker.bindPopup("<b>Fundação de Hematologia e Hemoterapia de Rondônia - FHEMERON</b><br>Rua Benedito de Souza Brito, s/nº - Setor Industrial<br>CEP: 76.821-080<br>Telefone: (69) 3216-5485<br>E-mail: presidencia@fhemeron.ro.gov.br").openPopup();




//26 hemocentro 
var marker = L.marker([-22.910120,-43.191420]).addTo(map);

marker.bindPopup("<b>Centro de Hemoterapia e Hematologia do Rio de Janeiro - HEMORIO</b><br>Endereço: Rua Frei Caneca, 08 - Centro<br>CEP: 20211-030<br>Telefone: (21)2332-8620/2332-8611 – ramal: 2214<br>E-mail: gabdg@hemorio.rj.gov.br").openPopup();



//27 hemocentro 
var marker = L.marker([-20.297380,-40.316900]).addTo(map);

marker.bindPopup("<b>Centro Estadual de Hemoterapia e Hematologia Marcos Daniel Santos - HEMOES</b><br>Endereço: Av. Marechal Campos,1468 - Maruípe<br>CEP: 29047-105 <br>Telefone: (27) 3636-7921<br>E-mail: hemoes@saude.es.gov.br").openPopup();




//29 hemocentro 
var marker = L.marker([-3.087670,-60.026699]).addTo(map);

marker.bindPopup("<b>Fhemoam</b><br>Endereço:Av Constantino Nery, 4397<br>Cep:69050-000<br>Telefone:(92)36550167(92)36565180").openPopup();



//30 hemocentro 
var marker = L.marker([-10.881390,-61.946560]).addTo(map);

marker.bindPopup("<b>Uct De Ji Paraná</b><br>Endereço:R Vilagran Cabrita, 1440 - Centro - Ji-parana, Rondônia <br>Cep:76900-044<br>Telefone:(69)34226762(69)34211615").openPopup();



// 31 hemocentro 
var marker = L.marker([-5.465370,-47.881330]).addTo(map);

marker.bindPopup("<b>Unidade De Coleta De Transfusão Augustinópolis</b><br>Endereço:Rua Anicuns, 200 - Centro - Augustinópolis, Tocantins <br>Cep:77960-000<br>Telefone:(63)3456-1309/(63)3456-1308").openPopup();


//32 hemocentro 
var marker = L.marker([-7.193570,-48.208730]).addTo(map);

marker.bindPopup("<b>Hemocentro Regional De Araguaína</b><br>Endereço:R Treze De Maio, 1336 - Setor Central - Araguaina, Tocantins<br>Cep:77803-130<br>Telefone:(63)34112917(63)34152900(63)34138100").openPopup();


//33 hemocentro 
var marker = L.marker([-7.124950,-34.874620]).addTo(map);

marker.bindPopup("<b>Hemocentro Coordenador Paraíba</b><br>Endereço:Av D Pedro Ii, 1119 - Centro - Joao Pessoa, Paraíba<br>Cep:58013-420<br>Telefone:(83)32185690").openPopup();




//36 hemocentro 
var marker = L.marker([-19.923810,-43.921920]).addTo(map);

marker.bindPopup("<b>Fundação Centro de Hematologia e Hemoterapia de Minas Gerais - HEMOMINAS</b><br>Endereço: Rua Grão Para, 882 - Santa Efigênia<br>CEP: 30150-341<br>Telefone: (31) 3768-7492/3768-7494<br>E-mail: gabinete@hemominas.mg.gov.br").openPopup();




//34 hemocentro 
var marker = L.marker([-21.702810, -57.886540]).addTo(map);

marker.bindPopup("<b>Centro de Hemoterapia e Hematologia de Mato Grosso do Sul - HEMOSUL</b><br>Endereço: Av. Fernando Correa da Costa, nº 1304 - Centro<br>CEP: 79004-310 <br>Telefone: (67) 3312-1502<br>E-mail: diretoria@hemosul.ms.gov.br").openPopup();




//35 hemocentro  
var marker = L.marker([-16.469320, -54.634540]).addTo(map);

marker.bindPopup("<b>Centro de Hemoterapia e Hematologia de Mato Grosso - MT-Hemocentro</b><br>Endereço: Rua 13 De Junho Nº 1055 - Porto<br>CEP: 78020- 000<br>Telefone: (65) 3623-0044 ramal: 232/3321-0351/3622-0856<br>E-mail: hemo@ses.mt.gov.br, redehemo@ses.mt.gov.br").openPopup();













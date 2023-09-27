const users = [
  { id: 1, username: 'vitacm', password: 'vitacm' },

  { id:	2	, username: 'charviupreti@gmail.com', password: '9899112792'},
  { id:	3	, username: 'rengakrishnaa@gmail.com', password: '6379435053'},
  { id:	4	, username: 'prathyuma.v2020@vitstudent.ac.in', password: '9600188603'},
  { id:	5	, username: 'chirayu.batra2021@vitstudent.ac.in', password: '8851435787'},
  { id:	6	, username: 'anshu.garg2021@vitstudent.ac.in', password: '7696897296'},
  { id:	7	, username: 'siddiqr53@gmail.com', password: '7036438391'},
  { id:	8	, username: 'sonit.singh2021@vitstudent.ac.in', password: '8320149627'},
  { id:	9	, username: 'khushi.agarwal2021b@vitstudent.ac.in', password: '9105787422'},
  { id:	10	, username: 'punnoose.punnen2021@vitstudent.ac.in', password: '7994222260'},
  { id:	11	, username: 'ashish.pujapanda2022@vitstudent.ac.in', password: '6372989845'},
  { id:	12	, username: 'nandhikadharani.s2021@vitstudent.ac.in', password: '7010888311'},
  { id:	13	, username: 'sidharth.pj2022@vitstudent.ac.in', password: '9080373951'},
  { id:	14	, username: 'manasvi.s2022@vitstudent.ac.in', password: '7304304061'},
  { id:	15	, username: 'saipriya.gs2021@vitstudent.ac.in', password: '8459036511'},
  { id:	16	, username: 'vaishnavi.2022a@vitstudent.ac.in', password: '9756576113'},
  { id:	17	, username: 'harish.r2021@vitstudent.ac.in', password: '7904595065'},
  { id:	18	, username: 'bhamineeojha3636@gmail.com', password: '7900145989'},
  { id:	19	, username: 'mohit.kumar2022b@vitstudent.ac.in', password: '9973395247'},
  { id:	20	, username: 'arkaparno.nandi2021@vitstudent.ac.in', password: '8585093116'},
  { id:	21	, username: 'upasana.l2022@vitstudent.ac.in', password: '9653691612'},
  { id:	22	, username: 'allwinjoe702@gmail.com', password: '9361574590'},
  { id:	23	, username: 'hemanthreddy4910@gmail.com', password: '9059226664'},
  { id:	24	, username: 'vageesh.jayaraman2022@vitstudent.ac.in', password: '6379178131'},
  { id:	25	, username: 'saumya.suraj2021@vitstudent.ac.in', password: '8210682081'},
  { id:	26	, username: 'arijit.bhowal2021@vitstudent.ac.in', password: '8822615645'},
  { id:	27	, username: 'aravind.n2022@vitstudent.ac.in', password: '9940219332'},
  { id:	28	, username: 'charanrahul.m2021@vitstudent.ac.in', password: '9840082672'},
  { id:	29	, username: 'paila.teja2021@vitstudent.ac.in', password: '9381173845'},
  { id:	30	, username: 'seemantgupta25@gmail.com', password: '9372869021'},
  { id:	31	, username: 'i.r.k.18113@gmail.com', password: '9940562901'},
  { id:	32	, username: 'kavinragul.ss2023@vitstudent.ac.in', password: '9751388080'},
  { id:	33	, username: 'sushindh.a2023@vitstudent.ac.in', password: '9940384952'},
  { id:	34	, username: 'krishnasharma.k2023@vitstudent.ac.in', password: '8310066038'},
  { id:	35	, username: 'palaniyappan.s2023@vitstudent.ac.in', password: '7708846333'},
  { id:	36	, username: 'abinandhan.r2023@vitstudent.ac.in', password: '9790759964'},
  { id:	37	, username: 'arunima.paul2023@vitstudent.ac.in', password: '9935696511'},
  { id:	38	, username: 'yahmini.h2023@vitstudent.ac.in', password: '9606700263'},
  { id:	39	, username: 'kadirineha.reddy2023@vitstudent.ac.in', password: '9543589002'},
  { id:	40	, username: 'rohit.aruna2023@vitstudent.ac.in', password: '7200856032'},
  { id:	41	, username: 'shivamrajan.rane2023@vitstudent.ac.in', password: '9579643916'},
  { id:	42	, username: 'sebabrat.sahoo2023@vitstudent.ac.in', password: '8777218145'},
  { id:	43	, username: 'sahil.sandeep2023@vitstudent.ac.in', password: '9650568002'},
  { id:	44	, username: 'tarun.parthiban2022@vitstudent.ac.in', password: '9535777421'},
  { id:	45	, username: 'vasish.pareekshith2022@vitstudent.ac.in', password: '7200110870'},
  { id:	46	, username: 'raghavan.b2023@vitstudent.ac.in', password: '8754513731'},
  { id:	47	, username: 'ashwinth.ms2022@vitstudent.ac.in', password: '7550263622'},
  { id:	48	, username: 'nanthan.snair2022@vitstudent.ac.in', password: '9840922888'},
  { id:	49	, username: 'aditya.mohanty2022@vitstudent.ac.in', password: '9124161711'},
  { id:	50	, username: 'nerellamohan.manikanth2021@vitstudent.ac.in', password: '8328319122'},
  { id:	51	, username: 'omprakash.2021@vitstudent.ac.in', password: '9655645814'},
  { id:	52	, username: 'malrajunayan.dheerajrao2021@vitstudent.ac.in', password: '9502498250'},
  { id:	53	, username: 'abhishek.prabakar2023@vitstudent.ac.in', password: '7305015111'},
  { id:	54	, username: 'srivastava.akshat327@gmail.com', password: '7428860584'},
  { id:	55	, username: 'naveen.bs2023@vitstudent.ac.in', password: '8618006797'},
  { id:	56	, username: 'vujwal.chowdary2023@vitstudent.ac.in', password: '9344939656'},
  { id:	57	, username: 'bhuvaneswari@apec.edu.in', password: '9790933531'},
  { id:	58	, username: 'msanjay1805@gmail.com', password: '9629343141'},
];
  
  let currentUser = null;
  
  export function login(username, password) {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      currentUser = user;
      return user;
    }

    return null;
  }
  
  export function getCurrentUser() {
    return currentUser;
  }
  
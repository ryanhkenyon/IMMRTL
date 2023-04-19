const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'IGQVJXSk1RanNUc0wxTGtzTF8zTW15bUxBaVBBS1NlZAEh3N3ZAzYmtVbHpFaGlVY3ZAnZAzFnR05OUEJJT2t2Ukc3NEpaYUJBaXN0akVJM3pLdXNWRzdsNlJ1bFdsZAnhVelE0WGF6QV8wdExTR2tDUVZASawZDZD',
		'X-RapidAPI-Host': 'instagram28.p.rapidapi.com'
	}
};

fetch('https://instagram28.p.rapidapi.com/media_info_v2?short_code=CA_ifcxMjFR', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


    // INSTA ACCESS KEY ARKAYTHEGOD
    // IGQVJXSk1RanNUc0wxTGtzTF8zTW15bUxBaVBBS1NlZAEh3N3ZAzYmtVbHpFaGlVY3ZAnZAzFnR05OUEJJT2t2Ukc3NEpaYUJBaXN0akVJM3pLdXNWRzdsNlJ1bFdsZAnhVelE0WGF6QV8wdExTR2tDUVZASawZDZD
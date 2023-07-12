// const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'Accept-Encoding': 'application/gzip',
// 		'X-RapidAPI-Key': '2d20c8481emsh1a14352fc74c50ap138645jsn15da5c2c6aa0',
// 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '2d20c8481emsh1a14352fc74c50ap138645jsn15da5c2c6aa0',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: 'Hello, world!',
		target: 'hi',
		source: 'en'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
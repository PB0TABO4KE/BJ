class Api {

	constructor(token) {
			this.path = "https://api.react-learning.ru";
			this.token = token;
	}

	// СЛУЖЕБНЫЕ ФУНКЦИИ//
	setHeaders(isCT = false, noToken = false) {
			const headerObj = {
					"Authorization": `Bearer ${this.token}`
			}
			if (isCT) {
					headerObj["Content-Type"] = "application/json"
			}
			if (noToken) {
					delete headerObj["Authorization"]
			}
			return headerObj;
	}

	setBody(body) {
			return JSON.stringify(body);
	}

	// РАБОТА С ПОСТАМИ//
	//Получить список всех постов//
	getAllPosts() {
			return fetch(`${this.path}/v2/group-12/posts`, {
					headers: this.setHeaders()
			}).then(res => res.json())
	}

	

	//Создание нового поста//
	addPost(body) {
			return fetch(`${this.path}/v2/group-12/posts`, {
					method: "POST",
					headers: this.setHeaders(true),
					body: this.setBody(body)
			}).then(res => res.json())
	}

	//Получение поста по ID//
	getSinglePost(postId) {
			return fetch(`${this.path}/v2/group-12/posts/${postId}`, {
					headers: this.setHeaders()
			}).then(res => res.json())
	}

	//Частичное изменение поста//
	updSinglePost(postId, body) {
			return fetch(`${this.path}/v2/group-12/posts/${postId}`, {
					method: "PATCH",
					headers: this.setHeaders(true),
					body: this.setBody(body)
			}).then(res => res.json())
	}

	//Удаление поста//
	delSinglePost(postId) {
			return fetch(`${this.path}/v2/group-12/posts/${postId}`, {
					method: "DELETE",
					headers: this.setHeaders()
			}).then(res => res.json())
	}

	//Добавление поста в избранное//
	setLike(postId, isLike) {
			return fetch(`${this.path}/v2/group-12/posts/likes/${postId}`, {
					method: isLike ? "PUT" : "DELETE",
					headers: this.setHeaders(true)
			}).then(res => res.json())

	}

	// РАБОТА С ЮЗЕРОМ//
	//Регистрация пользователя//
	reg(body) {
			return fetch(`${this.path}/signup`, {
					method: "POST",
					headers: this.setHeaders(true, true),
					body: this.setBody(body)
			}).then(res => res.json())
	}

	//Авторизация пользователя//
	auth(body) {
			return fetch(`${this.path}/signin`, {
					method: "POST",
					headers: this.setHeaders(true, true),
					body: this.setBody(body)
			}).then(res => res.json())
	}

	// Получение информации об авторизованном пользователе //
	getProfile() {
			return fetch(`${this.path}/users/me`, {
					headers: this.setHeaders()
			}).then(res => res.json())
	}
	getProfileId(id) {
		return fetch(`${this.path}/users/${id}`, {
				headers: this.setHeaders(false,false)
		}).then(res => res.json())
}

	//Изменение данных о пользователе (Если передан updImg - изменение автатара, если не передан - изменение всего пользователя)//
	updProfile(body, updImg = false) {
			return fetch(`${this.path}/users/me/${updImg ? "avatar" : ""}`, {
					method: "PATCH",
					headers: this.setHeaders(true),
					body: this.setBody(body)
			}).then(res => res.json())
	}




	//========//

	addReview(id, body) {
			return fetch(`${this.path}/v2/group-12/posts/comments/${id}`, {
					method: "POST",
					headers: this.setHeaders(true),
					body: this.setBody(body)
			}).then(res => res.json())
	}

	delReview(productId, reviewId) {
			return fetch(`${this.path}/v2/group-12/posts/comments/${productId}/${reviewId}`, {
					method: "DELETE",
					headers: this.setHeaders()
			}).then(res => res.json())
	}


	/* Информация из старого API по комметариям, доделать
	GET https://api.react-learning.ru/v2/:groupId/posts/search/?query=<строка фильтрации по title> // для поиска постов
	
	GET https://api.react-learning.ru/v2/:groupId/posts/paginate?page=<номер страницы>&limit=<число ограничивающее вывод на страницу>&query=<строка фильтрации по title> //добавление навигации
	
	POST https://api.react-learning.ru/v2/:groupId/posts/comments/:postId // добавление комментария по id
	
	DELETE https://api.react-learning.ru/v2/:groupId/posts/comments/:postId/:commentId // удаление комментария по id
	
	GET https://api.react-learning.ru/v2/:groupId/posts/comments/ // получение всех комментариев
	GET https://api.react-learning.ru/v2/:groupId/posts/comments/:postId // получение комментариев конкрентного поста.
	
	*/
}

export default Api;
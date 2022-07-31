<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="css/select.css">
		<link rel="stylesheet" href="css/style.css">
		<title>Поздравления в стихах на заказ</title>
		<link rel="preconnect" href="https://fonts.gstatic.com">
    	<link href="https://fonts.googleapis.com/css2?family=Neucha&display=swap" rel="stylesheet">
	</head>
	<body>
		<div class="wrapper">
			<div class="form">
				<form action="#" id="form" class="form__body">
					<h1 class="form__title">Форма отправки заказа </h1>
					<p>Пожалуйста, напишите, как к Вам обращаться, не забыв указать свою электронную почту. И, конечно же, Вы можете использовать поле "Сообщение" для всех Ваших пожеланий и подробностей, относящихся к заказу. Также, Вы можете прикрепить к сообщению фото (например, фото молодоженов, которым адресовано стихотворение). </p>
					<div class="form__item">
						<label for="formName" class="form__label">Имя*:</label>
						<input id="formName" type="text" name="name" class="form__input _req">
					</div>
					<div class="form__item">
						<label for="formEmail" class="form__label">E-mail*:</label>
						<input id="formEmail" type="text" name="email" class="form__input _req _email">
					</div>
				
					<div class="form__item">
						<label for="formMessage" class="form__label">Сообщение:</label>
						<textarea name="message" id="formMessage" class="form__input"></textarea>
					</div>
					
					<div class="form__item">
						<div class="form__label">Прикрепить фото</div>
						<div class="file">
							<div class="file__item">
								<input id="formImage" accept=".jpg, .png, .gif" type="file" name="image" class="file__input">
								<div class="file__button">Выбрать</div>
							</div>
							<div id="formPreview" class="file__preview"></div>
						</div>
					</div>
				
					<button type="submit" class="form__button">Отправить</button>
				</form>
			</div>
		</div>
		
		<script src="js/select.js"></script>
		<script src="js/script.js"></script>
	</body>
</html>
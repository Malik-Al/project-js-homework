# from time import sleep
# from selenium import webdriver

# # browser = webdriver.Firefox()
# # browser.implicitly_wait(5)

# # browser.get('https://www.instagram.com/')

# # login_link = browser.find_element_by_xpath("//a[text()='Log in']")
# # login_link.click()

# # sleep(2)

# # username_input = browser.find_element_by_css_selector("input[name='username']")
# # password_input = browser.find_element_by_css_selector("input[name='password']")

# # username_input.send_keys("<имя пользователя>")
# # password_input.send_keys("<пароль>")

# # login_button = browser.find_element_by_xpath("//button[@type='submit']")
# # login_button.click()

# # sleep(5)

# # browser.close()



# from instapy import InstaPy

# # InstaPy(username="bot_1733", password="bot_1733_1").login()

# session = InstaPy(username="bot_1733", password="bot_1733_1")



# session.login()

# ## бот может лайкать посты с хештегами #bmw или #mercedes
# session.like_by_tags(["bmw", "mercedes"], amount=5) # [1]



# ## Вы также можете указать параметры постов, которые бот НЕ должен лайкать, с помощью метода set_dont_like():
# session.set_dont_like(["naked", "nsfw"])

# # бот подпишется на 50% от тех юзеров, чьи посты он лайкнул. Опять же каждое действие будет залогировано.
# session.set_do_follow(True, percentage=100)

# session.set_do_comment(True, percentage=100)
# session.set_comments(["Nice!", "Sweet!", "Beautiful :heart_eyes:"])


# session.end()

        




name = input('как тебя зовут ?')

if name == 'malik':
	print('Привет %s '%(name))
else:
	print('иди в жопу')
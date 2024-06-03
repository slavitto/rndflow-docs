# General

## Registration

### General

- Click the **LOGIN** button in the upper right corner of the platform’s main page.

 ![Signin](/images/common/signin.png)

- Click on the **NEW USER** button

- Enter your desired login, email and password.

 ![Registration](/images/common/registration.png)

- Confirm that you are not a robot by clicking on the <span class="iconify-inline" data-icon="mdi:robot-confused-outline"/> button and entering the displayed captcha (you must enter English text, distinguishing between uppercase and lowercase letters).

 ![Registration](/images/common/captcha.png)

- Click on the **NEW USER** button

 If the correct data is entered, you will be notified that a message has been sent by email.

 ![Registration info](/images/common/registration_info.png)

- Open an incoming letter from the user **server@rndflow** (the address may differ and is determined by the administrator of the platform instance).

 ![Registration confirm letter](/images/common/registration_confirm.png)

- Follow the link provided in the letter.

 Registration confirmed - [Go][1] to [workspace][2]!

 ![Registration confirmed](/images/common/registration_confirmed.png)

- Press the **LOGIN** button and log in.

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
Attention! The administration of a platform instance can set [registration audit](#registration audit) for users or registration can be completely [prohibited](#registration ban).
 :::


### Using external authorization

- Click the **LOGIN** button in the upper right corner of the platform’s main page.

 ![Signin](/images/common/signin.png)

- Click on the **NEW USER** button

 ![Registration](/images/common/registration.png)

- Confirm that you are not a robot by clicking on the <span class="iconify-inline" data-icon="mdi:robot-confused-outline"/> button and entering the displayed captcha (you must enter the text distinguishing between uppercase and lowercase letters) .

 ![Captcha](/images/common/captcha.png)

- After entering the captcha, external authorization buttons will become available.

 ![OAuthList](/images/common/oauth_list.png)

- Click on the required external authorization button.

- Follow the standard procedure for allowing access to an external application for the selected external authorization source. If necessary, enter your username and password (this information is not transmitted to the platform).

- If access is successfully granted, the new user will be authorized and redirected to the main page of the platform.

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>
A new user will be created on the platform, to which the previously specified external account will be linked.
If you plan to use not only external authorization, but also internal platforms, then you need to check on the [user information] page[3] the received login and [reset password](#reset-password).
:::

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
Attention! The administration of a platform instance can set [registration audit](#registration audit) for users or registration can be completely [prohibited](#registration ban).
 :::

## Connecting external authorization

- Log in
- Go to [user panel][3]
- Click on the *EDIT* button
- Click on the required external authorization button.
 ![OAuthList](/images/common/oauth_list.png)

- Follow the standard procedure for allowing access to an external application for the selected external authorization source. If necessary, enter your username and password (this information is not transmitted to the platform).

- If access is successfully granted, the ability to log into the application using the selected external authorization source will be added.

## Deny registration

If registration is prohibited, the registration window looks like:

![Registration disabled](/images/common/registration_disabled.png)


## Registration audit

If the audit mode for new users is enabled on the platform, they are not automatically activated. New users are activated by platform administrators.

In this case, after confirming registration, the user receives a letter of the following type:

![Registration audit letter](/images/common/registration_audit_wait.png)

## Password reset

- Press the **RESET** button on the panel of the login or registration page.

- Enter the correct user login and email address.

- Press the **RESET** button.

![Password reset](/images/common/password_recovery.png)

- If there is an active user with the specified login and email address, confirmation of the password reset request will be displayed.

![Password reset message](/images/common/password_recovery_message.png)

- A confirmation email will be sent to the specified mailbox to reset the password.

![Password reset email](/images/common/password_recovery_email.png)

- To reset your password, you must click on the button labeled **Confirm your password reset request**.

- A window with a new password will open

![Password reset email](/images/common/password_recovery_reset.png)

- Information will be sent to the previously specified mailbox confirming the completion of the password reset procedure

![Password reset email](/images/common/password_recovery_reset_email.png)


## Exit the platform

Open the link bar in the upper right corner of the screen and click on the <span class="iconify-inline" data-icon="mdi:logout"></span> button.

![Exit](/images/common/link_panel.png)

[1]: #переход-в-рабочее-пространство
[2]: /desc/workspace.md
[3]: /desc/dashboard.md#панель-пользователя
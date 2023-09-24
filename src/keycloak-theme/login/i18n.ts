import {createUseI18n} from "keycloakify/login";

export const { useI18n } = createUseI18n({
    // NOTE: Here you can override the default i18n messages
    // or define new ones that, for example, you would have
    // defined in the Keycloak admin UI for UserProfile
    // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
    en: {
        alphanumericalCharsOnly: "Only alphanumerical characters",
        gender: "Gender",
        // Here we overwrite the default english value for the message "doForgotPassword"
        // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
        doForgotPassword: "I forgot my password",
        invalidUserMessage: "Invalid username or password.",
        backToApplication: "Back to Application",
        or: "Or",
        backToLogin: "Back to Login",
        continueTo: "Continue to"
    },
    de: {
        /* spell-checker: disable */
        alphanumericalCharsOnly: "Nur Alphanumerische Zeichen",
        gender: "Geschlecht",
        doForgotPassword: "Ich hab mein Passwort vergessen",
        invalidUserMessage: "Falscher Benutzername oder Passwort",
        backToApplication: "Zurück zur App",
        or: "Oder",
        backToLogin: "Back to Login",
        continueTo: "Weiter zu"

        /* spell-checker: enable */
    }
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;

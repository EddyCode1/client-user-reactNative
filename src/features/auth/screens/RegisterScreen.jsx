import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert,
} from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { COLORS, SPACING, FONT_SIZE } from '../../../shared/constants/theme';
import Input from '../../../shared/components/common/Input';
import Button from '../../../shared/components/common/Button';

const RegisterScreen = ({navigation}) => {
    const { control, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            name: '',
            emailOrUsername: '',
            password: '',
        }
    });

    const onSubmit = (data) => {
        Alert.alert('Registrado', JSON.stringify(data));
        navigation.navigate('Login');
    }

    return (
       <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
       >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text style={styles.subtitle}> Crear cuenta </Text>
                </View>

                <View style={styles.form}>
                    <Controller
                        control={control}
                        rules={{required: 'Nombre requerido'}}
                        render={({field:{onChange, value}}) => (
                            <Input
                                label="Nombre"
                                placeholder="Tu nombre"
                                onChangeText={onChange}
                                value={value}
                                error={errors.name?.message}
                            />
                        )}
                        name="name"
                    />

                    <Controller
                        control={control}
                        rules={{required: 'Apellido requerido'}}
                        render={({field:{onChange, value}}) => (
                            <Input
                                label="Apellido"
                                placeholder="Tu Apellido"
                                onChangeText={onChange}
                                value={value}
                                error={errors.name?.message}
                            />
                        )}
                        name="lastName"
                    />

                    <Controller
                        control={control}
                        rules={{required: 'Email requerido'}}
                        render={({field:{onChange, value}}) => (
                            <Input
                                label="Email"
                                placeholder="correo@ejemplo.com"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.emailOrUsername?.message}
                            />
                        )}
                        name="email"
                    />

                    <Controller
                        control={control}
                        rules={{required: 'Contraseña requerida'}}
                        render={({field:{onChange, value}}) => (
                            <Input
                                label="Contraseña"
                                placeholder="Tu contraseña"
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry
                                error={errors.password?.message}
                            />
                        )}
                        name="password"
                    />

                    <Controller
                        control={control}
                        rules={{required: 'Numero de telefono requerido'}}
                        render={({field:{onChange, value}}) => (
                            <Input
                                label="Telefono"
                                placeholder="38120850"
                                onChangeText={onChange}
                                value={value}
                                error={errors.name?.message}
                            />
                        )}
                        name="phonNumber"
                    />

                    <Button title="Crear cuenta" onPress={handleSubmit(onSubmit)} style={styles.button} />

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>¿Ya tienes cuenta? </Text>
                        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Inicia sesión</Text>
                    </View>
                </View>
            </ScrollView>
       </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: SPACING.xl,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: SPACING.xxl,
  },
  subtitle: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.secondary,
    marginTop: SPACING.sm,
  },
  form: {
    width: "100%",
  },
  button: {
    marginTop: SPACING.lg,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: SPACING.xl,
  },
  footerText: {
    fontSize: FONT_SIZE.md,
    color: COLORS.textLight,
  },
  link: {
    fontSize: FONT_SIZE.md,
    color: COLORS.primary,
    fontWeight: "700",
  },
});

export default RegisterScreen;
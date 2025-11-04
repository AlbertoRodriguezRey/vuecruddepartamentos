<template>
    <div>
        <h1>
            Update
        </h1>
        <router-link class="btn btn-info" to="/">Volver</router-link>
        <form v-on:submit.prevent="updateDepartamento()" v-if="departamento">
            <label>Id departamento</label>
            <input class="form-control" type="number" v-model="departamento.numero" disabled/>
            <br/>
            <label>Nombre departamento</label>
            <input class="form-control" type="text" v-model="departamento.nombre"/>
            <br/>
            <label>Localidad departamento</label>
            <input class="form-control" type="text" v-model="departamento.localidad"/>
            <br/>
            <button class="btn btn-primary">Actualizar departamento</button>
        </form>
    </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';
const service = new ServiceDepartamentos();
export default {
    name: 'UpdateDepartamento',
    methods: {
        updateDepartamento() {
            service.updateDepartamento(this.departamento).then(() => {
                this.$router.push('/');
            })
        }
    },
    mounted() {
        let id = this.$route.params.id;
        service.findDepartamento(id).then(result => {
            this.departamento = result;
        })
    },
    data() {
        return {
            departamento: null
        }
    }
}
</script>

<style scoped>
/* Contenedor tipo tarjeta, centrado y con sombra sutil */
div {
    max-width: 520px;
    margin: 2rem auto;
    padding: 1.25rem 1.5rem;
    background: #ffffff;
    border: 1px solid #e5e7eb; /* gray-200 */
    border-radius: 12px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
        "Apple Color Emoji", "Segoe UI Emoji";
}

/* Título */
h1 {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    color: #111827; /* gray-900 */
}

/* Layout del formulario: separación consistente */
form {
    display: grid;
    gap: 0.75rem;
}

/* Los <br> del template no aportan con grid */
form br {
    display: none;
}

/* Etiquetas destacadas */
label {
    font-weight: 600;
    color: #374151; /* gray-700 */
}

/* Campos de texto: enfoque claro y accesible */
.form-control {
    width: 100%;
    padding: 0.625rem 0.75rem;
    border: 1px solid #d1d5db; /* gray-300 */
    border-radius: 8px;
    background: #ffffff;
    color: #111827; /* gray-900 */
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.form-control::placeholder {
    color: #9ca3af; /* gray-400 */
}

.form-control:focus {
    outline: none;
    border-color: #0d6efd; /* Bootstrap primary */
    box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.15);
}

/* Botón primario profesional */
button.btn.btn-primary,
button.btn.btn-primary:focus {
    background-color: #0d6efd;
    border-color: #0b5ed7;
    color: #ffffff;
}

button.btn.btn-primary {
    padding: 0.6rem 1rem;
    border-radius: 8px;
    font-weight: 600;
    transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.02s ease;
}

button.btn.btn-primary:hover {
    background-color: #0b5ed7;
    box-shadow: 0 8px 22px rgba(13, 110, 253, 0.25);
}

button.btn.btn-primary:active {
    transform: translateY(1px);
    box-shadow: 0 4px 12px rgba(13, 110, 253, 0.2);
}

/* Mensaje de estado */
h4 {
    margin-top: 1rem;
    font-weight: 600;
}

/* Modo oscuro opcional respetando preferencia del sistema */
@media (prefers-color-scheme: dark) {
    div {
        background: #0b1220; /* slate-950-ish */
        border-color: #1f2937; /* gray-800 */
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
    }

    h1 {
        color: #f9fafb; /* gray-50 */
    }

    label {
        color: #e5e7eb; /* gray-200 */
    }

    .form-control {
        background: #111827; /* gray-900 */
        color: #f9fafb; /* gray-50 */
        border-color: #374151; /* gray-700 */
    }

    .form-control::placeholder {
        color: #9ca3af; /* gray-400 */
    }
}
</style>
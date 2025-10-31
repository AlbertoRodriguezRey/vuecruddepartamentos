<template>
    <div>
        <h1>Departamentos</h1>
        <img src="./../assets/images/Loading_icon.gif" v-if="status == false"/>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th>Detalles</th>
                    <th>Actualizar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="departamento in departamentos" :key="departamento">
                    <td>{{ departamento.numero }}</td>
                    <td>{{ departamento.nombre }}</td>
                    <td>{{ departamento.localidad }}</td>
                    <td>
                        <router-link class="btn btn-info" :to="`/details/${departamento.numero}/${departamento.nombre}/${departamento.localidad}`">
                            Details
                        </router-link>
                    </td>
                    <td>
                        <router-link class="btn btn-warning" :to="`/update/${departamento.numero}`">
                             Update
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceDepartamentos from '../services/ServiceDepartamentos.js'
const service = new ServiceDepartamentos()
export default {
    name: 'DepartamentosComponent',
    data() {
        return {
            departamentos: [],
            status: false
        }
    }, mounted() {
        service.getDepartamentos().then(result => {
            this.departamentos = result;
            this.status = true;
        })
    }
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Contenedor tipo tarjeta */
div {
    max-width: 820px;
    margin: 2rem auto;
    padding: 1.5rem;
    background: #ffffff;
    border: 1px solid #e5e7eb; /* gray-200 */
    border-radius: 12px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
        "Apple Color Emoji", "Segoe UI Emoji";
    overflow: hidden;
}

/* Título limpio y profesional */
h1 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: #111827; /* gray-900 */
    text-align: center;
}

/* Loader centrado */
img {
    display: block;
    margin: 1rem auto;
    width: 48px;
    height: 48px;
    opacity: 0.8;
}

/* Tabla con bordes sutiles y estilo limpio */
table.table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid #e5e7eb; /* gray-200 */
    border-radius: 8px;
    overflow: hidden;
}

/* Cabecera moderna */
thead {
    background-color: #f9fafb; /* gray-50 */
}

thead th {
    padding: 0.75rem 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
    color: #374151; /* gray-700 */
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-bottom: 1px solid #e5e7eb;
}

/* Cuerpo de la tabla con desplazamiento */
tbody {
    display: block;
    max-height: 320px;
    overflow-y: auto;
    overflow-x: hidden;
}

thead,
tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
}

tbody td {
    padding: 0.75rem 1rem;
    text-align: left;
    vertical-align: middle;
    font-weight: 400;
    font-size: 0.875rem;
    color: #111827; /* gray-900 */
    border-bottom: 1px solid #e5e7eb;
    background: #ffffff;
    transition: background-color 0.2s ease;
}

/* Hover suave en filas */
tbody tr:hover {
    background-color: #f3f4f6; /* gray-100 */
}

/* Scrollbar personalizada */
tbody::-webkit-scrollbar {
    width: 6px;
}

tbody::-webkit-scrollbar-track {
    background-color: #f3f4f6;
}

tbody::-webkit-scrollbar-thumb {
    background-color: #cbd5e1; /* gray-300 */
    border-radius: 3px;
}

tbody::-webkit-scrollbar-thumb:hover {
    background-color: #9ca3af; /* gray-400 */
}

/* --- MODO OSCURO --- */
@media (prefers-color-scheme: dark) {
    div {
        background: #0b1220; /* slate-950 */
        border-color: #1f2937; /* gray-800 */
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
    }

    h1 {
        color: #f9fafb; /* gray-50 */
    }

    thead {
        background-color: #1f2937; /* gray-800 */
    }

    thead th {
        color: #071a3f; /* gray-200 */
        border-bottom-color: #374151; /* gray-700 */
    }

    tbody td {
        background: #111827; /* gray-900 */
        color: #f9fafb; /* gray-50 */
        border-bottom-color: #374151; /* gray-700 */
    }

    tbody tr:hover {
        background-color: #1e293b; /* slate-800 */
    }

    tbody::-webkit-scrollbar-track {
        background-color: #111827;
    }

    tbody::-webkit-scrollbar-thumb {
        background-color: #374151;
    }

    tbody::-webkit-scrollbar-thumb:hover {
        background-color: #4b5563;
    }
}
</style>

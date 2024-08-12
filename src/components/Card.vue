<template>
    <v-col cols="12" md="4">
        <v-card min-height="310px" class="bg-amber-lighten-1">
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-text>{{ card.text }}</v-card-text>
        </v-card>
    </v-col>
</template>

<script>
    export default {
    props: ['card'],
}  
</script>
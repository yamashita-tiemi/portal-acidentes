<template>
    <section class="mt-12 d-flex flex-column align-center">
        <h2>Alguns valores/noticias</h2>
        <v-row class="align-center justify-space-between mt-8">
            <card v-bind:card="card1" />
            <card v-bind:card="card2"/>
            <card v-bind:card="card3"/>
        </v-row>
    </section>
</template>

<script lang="ts">
export default {
    name: 'app',
    data() {
        return {
            card1: {
                title: 'Causas Comuns',
                text: 'Os acidentes de trânsito podem ser causados por diversos fatores, sendo os mais comuns a velocidade excessiva, a distração ao volante e as condições meteorológicas adversas. A velocidade excessiva reduz o tempo de reação e aumenta a gravidade dos impactos, enquanto a distração, como o uso de celulares, desvia a atenção do motorista da estrada. Condições meteorológicas desfavoráveis, como chuva e neblina, também contribuem significativamente para a ocorrência de acidentes, tornando a estrada mais escorregadia e reduzindo a visibilidade.',
            },
            card2: {
                title: 'Estatísticas Recentes',
                text: 'As estatísticas de acidentes de trânsito fornecem uma visão clara do impacto desses eventos na sociedade. Dados recentes mostram variações no número de acidentes, feridos e fatalidades ao longo dos anos. Estes números ajudam a identificar padrões e tendências, como o aumento ou a diminuição dos acidentes em diferentes períodos. Analisar essas estatísticas é essencial para entender a eficácia das políticas de segurança no trânsito e para desenvolver estratégias mais eficazes para reduzir o número de acidentes.',
            },
            card3: {
                title: 'Medidas de Prevenção',
                text: 'Adotar práticas de segurança no trânsito é fundamental para prevenir acidentes e proteger a vida de todos nas estradas. Entre as medidas mais eficazes estão o uso do cinto de segurança, o respeito aos limites de velocidade e a atenção total ao dirigir. Além disso, campanhas educativas e fiscalização rigorosa desempenham um papel crucial na promoção de comportamentos seguros. Implementar essas práticas e apoiar iniciativas voltadas para a segurança viária pode reduzir significativamente o número de acidentes e salvar vidas.',
            },
        }
    }
}
</script>
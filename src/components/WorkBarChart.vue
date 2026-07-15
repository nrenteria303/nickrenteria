<template>
    <Pie :data="data" :options="options" />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
    labels: ["Initial Education", "Freelance", "Contract", "Enterprise"],
    datasets: [
        {
            label: "Work Experience",
            data: [18, 20, 4, 64],
            backgroundColor: [
                "#FF6384",
                "#8b5cf6",
                "#FFCE56",
                "#10b981"
            ]
        }
    ],
}

const options = {
    plugins: {
        legend: {
            position: 'bottom',
            align: 'start'
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    const dataset = context.dataset.data;
                    const total = dataset.reduce((sum, val) => sum + val, 0);
                    const value = dataset[context.dataIndex];
                    const years = (value / 12).toFixed(1);
                    const percentage = ((value / total) * 100).toFixed(1) + '%';
                    return `${percentage} (${years} years)`;
                }
            }
        }
    }
}
</script>
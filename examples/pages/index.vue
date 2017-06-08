<template>
    <div>
        <h1>开发环境运行成功</h1>
        <div>编辑本页</div>
        <div>
            <BarGragh  />
        </div>
        <div>
            <LineGraph :data="data"/>
        </div>
    </div>
</template>
<script>
import BarGragh from '../../vue/BarGragh.vue';
import LineGraph from '../../vue/LineGraph.vue';

export default {
    data () {
        return {
            data: []
        };
    },
    props: [],
    computed: {
    },
    mounted () {
        this.data = [{label: '2017.02', value: 16.08},
               {label: '2017.05', value: 17.08},
               {label: '2017.08', value: 14.08},
               {label: '2017.11', value: 13.08},
               {label: '2019.02', value: 1.3}
        ];
    },
    methods: {},
    components: {
        BarGragh,
        LineGraph
    }
};
</script>
<style lang="less" scoped>
.wrap{

}
</style>

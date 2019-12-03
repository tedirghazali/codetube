<template>
    <div>
        <div id="toolbar">
            <a href="/posts" class="btn btn-primary"><i class="fas fa-list-alt"></i> View All</a>
        </div>
        <bootstrap-table :data="myPosts" :options="myOptions" :columns="myColumns" />
    </div>
</template>

<script>
    import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.min.js'

    export default {
        props: ['posts'],
        components: {
            'bootstrap-table': BootstrapTable
        },
        data () {
            return {
                myPosts: [],
                myOptions: {
                    search: true, 
                    pagination: true,
                    showColumns: true,
                    showPrint: true,
                    showExport: true,
                    filterControl: true,
                    toolbar: '#toolbar',
                },
                myColumns: [
                    { field: 'id', title: 'ID', sortable: true},
                    { field: 'title', title: 'Title', sortable: true, filterControl: 'input' },
                    { field: 'category', title: 'Category', sortable: true, filterControl: 'input'},
                    { field: 'tags', title: 'Tags', sortable: true, filterControl: 'input'},
                    { field: 'user.name', title: 'Author', sortable: true, filterControl: 'input'},
                    { field: 'status', title: 'Status', sortable: true, filterControl: 'select'},
                    {
                        field: 'action',
                        title: 'Actions',
                        align: 'center',
                        width: '140px',
                        formatter: function (e, value, row){
                            return '<button class="btn btn-sm btn-success mr-1 restore"><i class="fas fa-trash-restore"></i></button><button class="btn btn-sm btn-danger mr-1 remove"><i class="fas fa-times-circle"></i></button>'
                        },
                        events: {
                            'click .restore': function (e, value, row){
                                return window.location.assign('/recycle-posts/'+row.id)
                            },
                            'click .remove': function (e, value, row){
                                axios.post('/recycle-posts/', {
                                    id: row.id
                                })
                                return window.location.replace('/assign-posts/posts.trash')
                            },
                        }
                    }
                ]
            }
        },
        created () {
            this.myPosts = JSON.parse(this.posts)
        }
    }
</script>
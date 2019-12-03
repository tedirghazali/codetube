<template>
    <div>
        <div id="toolbar">
            <a href="/posts/create" class="btn btn-primary"><i class="fas fa-plus-circle"></i> Add New</a>
            <a href="/recycle-posts" class="btn btn-danger"><i class="fas fa-trash-alt"></i> Recycle Bins</a>
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
                            return '<button class="btn btn-sm btn-info mr-1 show"><i class="fas fa-eye"></i></button><button class="btn btn-sm btn-warning mr-1 edit"><i class="fas fa-edit"></i></button><button class="btn btn-sm btn-danger mr-1 destroy"><i class="fas fa-trash"></i></button>'
                        },
                        events: {
                            'click .show': function (e, value, row){
                                return window.location.assign('/posts/'+row.id)
                            },
                            'click .edit': function (e, value, row){
                                return window.location.assign('/posts/'+row.id+'/edit')
                            },
                            'click .destroy': function (e, value, row){
                                axios.delete('/posts/'+row.id, {
                                    id: row.id
                                })
                                return window.location.replace('/assign-posts/posts.index')
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
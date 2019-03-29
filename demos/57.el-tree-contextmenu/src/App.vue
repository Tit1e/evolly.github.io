<template>
  <div id="app">
    <div>
      <el-tree :data="data" id="el-tree" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      <context-menu class="right-menu"
        :target="contextMenuTarget"
        :show="contextMenuVisible"
        @update:show="(show) => contextMenuVisible = show">
        <a href="javascript:;" @click="handleClick">操作1</a>
        <a href="javascript:;" @click="handleClick">操作2</a>
        <a href="javascript:;" @click="handleClick">操作3</a>
      </context-menu>
      当前右键获取到的节点为：{{JSON.stringify(nodeData)}}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contextMenuTarget: null,
        contextMenuVisible: false,
        nodeData: {},
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.contextMenuTarget = document.querySelector('#el-tree')
        const tree = document.querySelectorAll('#el-tree [role="treeitem"]')
        tree.forEach(i => {
          i.addEventListener('contextmenu',event => {
            event.target.click()
          })
        })
      })
    },
    methods: {
      handleNodeClick(data) {
        console.log(data)
        this.nodeData = data
      },
      handleClick(){
        this.contextMenuVisible = false
      }
    }
  }
</script>
<style>

html,body {
  height: 100%;
  font-size: 14px;
}
#app {
  width: 800px;
  margin: 0 auto;
  font-family: 'Microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
#el-tree{
  user-select:none;
}
.right-menu {
  position: fixed;
  background: #fff;
  border: solid 1px rgba(0, 0, 0, .2);
  border-radius: 3px;
  z-index: 999;
  display: none;
}
.right-menu a {
  width: 75px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  display: block;
  color: #1a1a1a;
}
.right-menu a:hover {
  background: #eee;
  color: #fff;
}
.right-menu {
    border: 1px solid #eee;
    box-shadow: 0 0.5em 1em 0 rgba(0,0,0,.1);
    border-radius: 1px;
}
a {
    text-decoration: none;
}
.right-menu a {
    padding: 2px;
}
.right-menu a:hover {
    background: #42b983;
}
</style>


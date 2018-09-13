<template>
    <div class="project-content">
        <p class="project-title">我负责的项目</p>
        <ul class="project-list">
            <li class="project-item">
                <img src="https://mailimg.teambition.com/logos/cover-demo.jpg">
                <div class="project-mask">
                    <div class="project-mask-header">
                        <p class="project-mask-title">产品进展</p>
                        <div>
                            <Tooltip content="打开设置设置" placement="top">
                                <Icon class="icon" type="md-create" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </li>
            <li class="project-item add-project">
                <Icon class="add-icon" type="ios-add-circle" />
                <p>创建新项目</p>
            </li>
        </ul>
        <p class="project-title">我参与的项目</p>
        <ul class="project-list">
            <li class="project-item">
                <img src="https://mailimg.teambition.com/logos/cover-demo.jpg">
                <div class="project-mask">
                    <div class="project-mask-header">
                        <p class="project-mask-title">产品进展</p>
                        <div>
                            <Tooltip content="打开设置设置" placement="top">
                                <Icon class="icon" type="md-create" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.project-content {
    position: relative;
    .project-title {
        margin-left: 14px;
        font-size: 18px;
        color: #333;
    }
    .project-list {
        list-style: none;
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        margin-bottom: 20px;
        .project-item {
            position: relative;
            margin: 14px;
            width: 254px;
            height: 128px;
            border-radius: 5px;
            cursor: pointer;
            border: 1px solid rgba($color: #000000, $alpha: .15);
            transform: translateY(0);
            transition: transform .218s ease;
            background-color: #fff;
            &:hover {
               transform: translateY(-5px);
                box-shadow: 0 5px 12px 2px rgba($color: #000000, $alpha: .1); 
            }
            img {
                width: 100%;
                height: 100%;
            }
            &.add-project {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                .add-icon {
                    margin-bottom: 10px;
                    font-size: 46px;
                }
                &:hover {
                    color: #3da8f5;
                }
            }
            .project-mask {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                border-radius: 5px;
                .icon {
                    opacity: 0;
                    transition: all .5s; 
                }
                &:hover .icon {
                    opacity: 1;
                }
                .project-mask-header {
                    width: 100%;
                    padding: 10px 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 18px;
                    color: #fff;
                    .icon:hover {
                        font-size: 19px;
                        font-weight: bold;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    
}
@media only screen and (max-width: 1199px) {
        .project-content {
            width: 296px * 3 + 14px * 6;
            .project-item {
                width: 296px !important;
                height: 148px !important;
            }
        }
        
    }
</style>


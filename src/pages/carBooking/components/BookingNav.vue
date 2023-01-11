<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <div class=" d-flex flex-row align-items-center justify-content-between">
                <div class="navbar-brand p-3 text-light"><span class="text-warning">CAR</span>ent</div>
                <button class="navbar-toggler text-bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav py-2">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">首頁/Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#introduce">介紹/Introduce</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#serve">服務特色/Serve</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#news">最新消息/News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#aboutus">關於我們/About Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'BookingNav'
    }
</script>

<style lang="scss" scoped>  
    $blue: #003060;
    $yellow: #ffc107;

    .navbar {
        background: $blue;
        .container-fluid {
            flex-direction: column;
            .navbar-brand {
                font-family: 'Poppins', sans-serif;
                font-weight: bold;
                font-size: 4rem;
                span {
                    font-family: 'Poppins', sans-serif;
                }
            }
            .nav-link {
                font-size: 1.8rem;
                color: #f0f0f0;
                margin: 0 2rem;
                &:hover {
                    color: $yellow;
                }
            }
        }
    } 

    @media(max-width: 992px) {
        .navbar {
            .container-fluid {
                .nav-link {
                    padding-bottom: 1rem;
                }
            }
        } 
    }
</style>
const nav = () => {
  return `
    <header class="p-[15px] bg-[#040b14]">
        <div class="container">
            <nav>
                <ul class="flex justify-between montserrat uppercase text-[#fff] ">
                    <li class="py-[10px] px-[18px] text-[18px]"><a class="hover:text-[#149ddd] transition-all duration-300" href="/index.html">Home</a></li>
                    <li class="py-[10px] px-[18px] text-[18px]"><a class="hover:text-[#149ddd] transition-all duration-300" href="/pages/product.html">product</a></li>
                    <li class="py-[10px] px-[18px] text-[18px]"><a class="hover:text-[#149ddd] transition-all duration-300" href="/pages/cart.html">Cart</a></li>
                    <li class="py-[10px] px-[18px] text-[18px]"><a class="hover:text-[#149ddd] transition-all duration-300" href="/pages/signup.html">Sign up</a></li>
                    <li class="py-[10px] px-[18px] text-[18px]"><a class="hover:text-[#149ddd] transition-all duration-300" href="/pages/signin.html">Sign in</a></li>
                </ul>
            </nav>
        </div>
    </header>`;
};

nav();
export default nav();

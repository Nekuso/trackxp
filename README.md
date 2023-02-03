"
	<?php 
if(isset($_GET['id'])){
    $qry = $conn->query("SELECT * FROM `sale_list` where id = '{$_GET['id']}' ");
    if($qry->num_rows > 0){
        $res = $qry->fetch_array();
        foreach($res as $k => $v){
            if(!is_numeric($k)){
                $$k = $v;
            }
        }
    }else{
        echo '<script> alert("Unknown Sale\'s ID."); location.replace("./?page=sales"); </script>';
    }
    
}
?>
<style>
    #sales-panel{
        height:70vh;
    }
    #panel-left, #item-list{
        background:rgb(255 255 255 / 17%);
    }
    #item-list{
        height:60%;
    }
</style>
<div class="content py-3">
    <div class="container-fluid">
        <div class="card card-outline card-outline rounded-0 shadow blur">
            <div class="card-header">
                <h5 class="card-title"><?= isset($id) ? "Update ". $code . " Sale" : "New Sale" ?></h5>
            </div>
            <div class="card-body">
                <div class="container-fluid">
                    <form action="" id="sale-form">
                        <input type="hidden" name="id" value="<?= isset($id) ? $id : '' ?>">
                        <input type="hidden" name="amount" value="<?= isset($amount) ? $amount : '' ?>">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group mb-3">
                                    <label for="client_name" class="control-label">Client Full Name</label>
                                    <input type="text" name="client_name" id="client_name" class="form-control form-control-sm rounded-0" value="<?= isset($client_name) ? $client_name : "Guest" ?>" required="required">
                                </div>
                            </div>
                        </div>
                        <div class="border rounded-0 shadow bg-gradient-navy px-1 py-1" id="sales-panel">
                            <div class="d-flex h-100 w-100">
                                <div class="col-7 px-0 h-100" id="panel-left">
                                    <div class="card card-primary bg-transparent border-0 h-100 card-tabs rounded-0">
                                        <div class="card-header bg-gradient-dark p-0 pt-1">
                                            <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                                <?php 
                                                $has_active = false; 
                                                $category = $conn->query("SELECT * FROM `category_list` where delete_flag = 0 and `status` = 1  order by `name` asc");
                                                $product = $conn->query("SELECT * FROM `product_list` where delete_flag = 0 and `status` = 1  order by `name` asc");
                                                $prod_arr = [];
                                                while($row = $product->fetch_array()){
                                                    $prod_arr[$row['category_id']][] = $row;
                                                }
                                                $cat_arr = array_column($category->fetch_all(MYSQLI_ASSOC),'name', 'id');
                                                foreach($cat_arr as $k => $v):
                                                ?>
                                                <li class="nav-item">
                                                    <a class="nav-link <?= (!$has_active)? 'active' : '' ?>" id="custom-tabs-one-home-tab" data-toggle="pill" href="#cat-tab-<?= $k ?>" role="tab" aria-controls="cat-tab-<?= $k ?>" aria-selected="<?= (!$has_active)? 'true' : 'false' ?>"><?= $v ?></a>
                                                </li>
                                                <?php 
                                                $has_active = true; 
                                                endforeach; 
                                                ?>

                                            </ul>
                                        </div>
                                        <div class="card-body">
                                            <div class="tab-content" id="custom-tabs-one-tabContent">
                                                <?php 
                                                $has_active = false; 
                                                foreach($cat_arr as $k => $v): 
                                                ?>
                                                <div class="tab-pane fade <?= (!$has_active)? 'active show' : '' ?>" id="cat-tab-<?= $k ?>" role="tabpanel" aria-labelledby="cat-tab-<?= $k ?>-tab">
                                                    <div class="row">
                                                        <?php if(isset($prod_arr[$k])): ?>
                                                            <?php foreach($prod_arr[$k] as $row): ?>
                                                                <div class=" col-lg-3 col-md-4 col-sm-12 col-xs-12 px-2 py-3">
                                                                    <a href="javascript:void(0)"  class="card rounded-pill text-dark text-decoration-none prod-item" data-price="<?= $row['price'] ?>" data-id="<?= $row['id'] ?>">
                                                                        <div class="card-body text-center">
                                                                            <?= $row['name'] ?>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            <?php endforeach; ?>
                                                        <?php endif; ?>
                                                    </div>
                                                </div>
                                                <?php 
                                                $has_active = true; 
                                                endforeach;
                                                ?>

                                            </div>
                                        </div>
                                        <!-- /.card -->
                                        </div>
                                </div>
                                <div class="col-5 h-100">
                                    <table class="table table-bordered table-striped mb-0">
                                        <colgroup>
                                            <col width="20%">
                                            <col width="45%">
                                            <col width="25%">
                                            <col width="10%">
                                        </colgroup>
                                        <thead>
                                            <tr class="bg-gradient-navy-dark">
                                                <th class="text-center px-2 py-1">QTY</th>
                                                <th class="text-center px-2 py-1">Product</th>
                                                <th class="text-center px-2 py-1">Total</th>
                                                <th class="text-center px-2 py-1"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr></tr>
                                        </tbody>
                                    </table>
                                    <div id="item-list" class="overflow-auto">
                                        <table class="table table-bordered table-striped" id="product-list">
                                            <colgroup>
                                                <col width="20%">
                                                <col width="45%">
                                                <col width="25%">
                                                <col width="10%">
                                            </colgroup>
                                            <tbody>
                                                <?php if(isset($id)): ?>
                                                <?php 
                                                    $sp_query = $conn->query("SELECT sp.*, p.name as `product` FROM `sale_products` sp inner join `product_list` p on sp.product_id =p.id where sp.sale_id = '{$id}'");
                                                    while($row = $sp_query->fetch_assoc()):
                                                ?>
                                                <tr>
                                                    <td class="px-2 py-1 align-middle">
                                                        <input type="hidden" name="product_id[]" value="<?= $row['product_id'] ?>">
                                                        <input type="hidden" name="product_price[]" value="<?= $row['price'] ?>">
                                                        <input type="number" class="form-control form-control-sm rounded-0 text-center" min="0" name="product_qty[]" value="<?= $row['qty'] ?>" required>
                                                    </td>
                                                    <td class="px-2 py-1 align-middle" style="line-height:.9em">
                                                        <p class="product_name m-0 truncate-1"><?= $row['product'] ?></p>
                                                        <p class="m-0"><small class="product_price">x <?= format_num($row['price']) ?></small></p>
                                                    </td>
                                                    <td class="px-2 py-1 align-middle text-right product_total"><?= format_num($row['price'] * $row['qty']) ?></td>
                                                    <td class="px-2 py-1 align-middle text-center"><button class="btn btn-outline-danger border-0 btn-sm rounded-0 rem-product p-1" type="button"><i class="fa fa-times"></i></button></td>
                                                </tr>
                                                <?php endwhile; ?>
                                                <?php endif; ?>
                                            </tbody>
                                        </table>
                                    </div>
                                    <h3 class="text-light w-100 d-flex">
                                        <div class="col-auto">Total:</div>
                                        <div class="col-auto flex-shrink-1 flex-grow-1 truncate-1 text-right" id="amount"><?= isset($amount) ? format_num($amount) : '0.00' ?></div>
                                    </h3>
                                    <h3 class="d-flex w-100 align-items-center">
                                        <div class="col-4">Tendered:</div>
                                        <div class="col-8">
                                            <input type="text" pattern="[0-9\.]*$" class="form-control form-control-lg rounded-0 text-right" id="tendered" name="tendered" value="<?= isset($tendered) ? str_replace(",", "", format_num($tendered)) : '0' ?>" required />
                                        </div>
                                    </h3>
                                    <h3 class="d-flex w-100 align-items-center">
                                        <div class="col-4">Change:</div>
                                        <div class="col-8">
                                            <input type="text" pattern="[0-9\.]*$" class="form-control form-control-lg rounded-0 text-right" id="change" value="<?= isset($amount) && isset($tendered) ? format_num($tendered - $amount) : '0' ?>" readonly />
                                        </div>
                                    </h3>
                                    <h3 class="d-flex w-100 align-items-center">
                                        <div class="col-4">Type:</div>
                                        <div class="col-8">
                                            <select name="payment_type" id="payment_type" class="form-control rounded-0" required="required">
                                                <option value="1" <?= isset($payment_type) && $payment_type == 1 ? "selected" : "" ?>>Cash</option>
                                                <option value="2" <?= isset($payment_type) && $payment_type == 2 ? "selected" : "" ?>>Debit Card</option>
                                                <option value="3" <?= isset($payment_type) && $payment_type == 3 ? "selected" : "" ?>>Credit Card</option>
                                            </select>
                                        </div>
                                    </h3>
                                    <input type="text" id="payment_code" class="form-control form-control-sm rounded-0 d-none" name="payment_code" value="<?= isset($payment_code) ? $payment_code: "" ?>" placeholder="Payment Code">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card-footer py-2 text-right">
                <button class="btn btn-primary rounded-0" form="sale-form">Save sale</button>
                <?php if(!isset($id)): ?>
                <a class="btn btn-default border rounded-0" href="./?page=sales">Cancel</a>
                <?php else: ?>
                <a class="btn btn-default border rounded-0" href="./?page=sales/view_details&id=<?= $id ?>">Cancel</a>
                <?php endif; ?> 
            </div>
        </div>
    </div>
</div>
<noscript id="product-clone">
<tr>
    <td class="px-2 py-1 align-middle">
        <input type="hidden" name="product_id[]">
        <input type="hidden" name="product_price[]">
        <input type="number" class="form-control form-control-sm rounded-0 text-center" min="0" name="product_qty[]" value="1" required>
    </td>
    <td class="px-2 py-1 align-middle" style="line-height:.9em">
        <p class="product_name m-0 truncate-1">Product 101</p>
        <p class="m-0"><small class="product_price">x 123.00</small></p>
    </td>
    <td class="px-2 py-1 align-middle text-right product_total"></td>
    <td class="px-2 py-1 align-middle text-center"><button class="btn btn-outline-danger border-0 btn-sm rounded-0 rem-product p-1" type="button"><i class="fa fa-times"></i></button></td>
</tr>
</noscript>
<script>
    function calc_change(){
        var amount = $('[name="amount"]').val()
        var tendered = $('[name="tendered"]').val()
        amount = amount > 0 ? amount : 0;
        tendered = tendered > 0 ? tendered : 0;
        var change = parseFloat(tendered) - parseFloat(amount)
        $('#change').val(parseFloat(change).toLocaleString('en-US'))
    }
    function calc_total_amount(){
        var total = 0;
        $('#product-list tbody tr').each(function(){
            var qty = $(this).find('[name="product_qty[]"]').val()
            qty = qty > 0 ? qty : 0
            total += (parseFloat($(this).find('[name="product_price[]"]').val()) * parseFloat(qty))
        })
        $('[name="amount"]').val(parseFloat(total))
        $('#amount').text(parseFloat(total).toLocaleString('en-US'))
        calc_change()
    }
    function calc_product(){
        var total = 0;
        
        $('#product-list tbody tr').each(function(){
            var qty = $(this).find('[name="product_qty[]"]').val()
            qty = qty > 0 ? qty : 0
            total += (parseFloat($(this).find('[name="product_price[]"]').val()) * parseFloat(qty))
        })
        $('#product_total').text(parseFloat(total).toLocaleString('en-US'))
        calc_total_amount()
    }
    $(function(){
        $('body').addClass('sidebar-collapse')
        $('#payment_type').change(function(){
            var type = $(this).val()
            if(type == 1){
                $('#payment_code').addClass('d-none').attr('required', false)
            }else{
                $('#payment_code').removeClass('d-none').attr('required', true)
            }
        })
        $('#product-list tbody tr').find('.rem-product').click(function(){
            var tr = $(this).closest('tr')
            if(confirm("Are you sure to remove "+(tr.find('.product_name').text())+" from product list?") === true){
                tr.remove()
                calc_product()
            }
        })
        $('#product-list tbody tr').find('[name="product_qty[]"]').on('input change', function(){
            var tr = $(this).closest('tr')
            var price = tr.find('[name="product_price[]"]').val()
            var qty = $(this).val()
            qty = qty > 0 ? qty : 0
            price = price > 0 ? price : 0
            var total = parseFloat(qty) * parseFloat(price)
            tr.find('.product_total').text(parseFloat(total).toLocaleString())
            calc_product()

        })
        $('#tendered').on('input',function(){
            calc_change()
        })
        $('.prod-item').click(function(){
            var id = $(this).attr('data-id')
            if($('#product-list tbody tr input[name="product_id[]"][value="'+id+'"]').length > 0){
                alert("Product already on the list.")
                return false;
            }
            var name = ($(this).find('.card-body').text()).trim()
            var price = $(this).attr('data-price')
            var tr = $($('noscript#product-clone').html()).clone()
            tr.find('input[name="product_id[]"]').val(id)
            tr.find('input[name="product_price[]"]').val(price)
            tr.find('.product_name').text(name)
            tr.find('.product_price').text('x ' + parseFloat(price).toLocaleString())
            tr.find('.product_total').text(parseFloat(price).toLocaleString())
            $('#product-list tbody').append(tr)
            calc_product()
            tr.find('.rem-product').click(function(){
                if(confirm("Are you sure to remove "+name+" from product list?") === true){
                    tr.remove()
                    calc_product()
                }
            })
            tr.find('[name="product_qty[]"]').on('input change', function(){
                var qty = $(this).val()
                qty = qty > 0 ? qty : 0
                var total = parseFloat(qty) * parseFloat(price)
                tr.find('.product_total').text(parseFloat(total).toLocaleString())
                calc_product()

            })
        })
        $('#sale-form').submit(function(e){
			e.preventDefault();
            var _this = $(this)
			 $('.err-msg').remove();
			start_loader();
			$.ajax({
				url:_base_url_+"classes/Master.php?f=save_sale",
				data: new FormData($(this)[0]),
                cache: false,
                contentType: false,
                processData: false,
                method: 'POST',
                type: 'POST',
                dataType: 'json',
				error:err=>{
					console.log(err)
					alert_toast("An error occured",'error');
					end_loader();
				},
				success:function(resp){
					if(typeof resp =='object' && resp.status == 'success'){
						location.href = "./?page=sales/view_details&id="+resp.sid
					}else if(resp.status == 'failed' && !!resp.msg){
                        var el = $('<div>')
                            el.addClass("alert alert-danger err-msg").text(resp.msg)
                            _this.prepend(el)
                            el.show('slow')
                            $("html, body,.modal").scrollTop(0);
                            end_loader()
                    }else{
						alert_toast("An error occured",'error');
						end_loader();
					}
				}
			})
		})
    })
</script>
"

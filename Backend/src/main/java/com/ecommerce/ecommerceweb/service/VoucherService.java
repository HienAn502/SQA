package com.ecommerce.ecommerceweb.service;

import com.ecommerce.ecommerceweb.model.Product;
import com.ecommerce.ecommerceweb.model.Voucher;
import com.ecommerce.ecommerceweb.repository.ProductRepository;
import com.ecommerce.ecommerceweb.repository.VoucherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class VoucherService {
    @Autowired
    VoucherRepository voucherRepository;
    @Autowired
    ProductRepository productRepository;

    public void createVoucher(Voucher voucher) {
        voucher.setCreatedDate(new Date());
        voucherRepository.save(voucher);
    }

    public List<Voucher> voucherList() {return voucherRepository.findAll();}
    public List<Voucher> applicableVoucherList() {
        List<Voucher> applicableVoucher = new ArrayList<>();
        for (Voucher voucher : voucherRepository.findAll()) {
            if (!voucher.isExpired())
                applicableVoucher.add(voucher);
        }
        return applicableVoucher;
    }
    public void editVoucher(int voucherId, Voucher updateVoucher) {
        Voucher voucher = voucherRepository.getReferenceById(voucherId);
        voucher.setName(updateVoucher.getName());
        voucher.setRate(updateVoucher.getRate());
        voucher.setCreatedDate(updateVoucher.getCreatedDate());
        voucher.setExpiredDate(updateVoucher.getExpiredDate());

        voucherRepository.save(voucher);
    }

    public boolean findById(int voucherId) {
        return voucherRepository.findById(voucherId).isPresent();
    }

    public void deleteVoucher(int voucherId) {
        Voucher voucher = voucherRepository.findById(voucherId).orElseThrow();
        voucherRepository.delete(voucher);
    }

    public void applyVoucher(int productId, int voucherId) {
        Voucher voucher = voucherRepository.findById(voucherId).orElseThrow();
        Product product = productRepository.findById(productId).orElseThrow();
        if (!voucher.isExpired()) {
            product.setDiscountPrice(product.getPrice() * voucher.getRate());
            product.setVoucher(voucher);

            voucherRepository.save(voucher);
            productRepository.save(product);
        }
    }
}

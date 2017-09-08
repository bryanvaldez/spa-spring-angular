///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package pe.gob.onpe.adan.configuration.database.Adan;
//
//import java.util.Properties;
//import javax.persistence.EntityManagerFactory;
//import javax.sql.DataSource;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.JpaVendorAdapter;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
///**
// *
// * @author bvaldez
// */
//@Configuration
//@EnableTransactionManagement
//@EnableJpaRepositories(
//        entityManagerFactoryRef = "adanEntityManagerFactory",
//        transactionManagerRef = "adanTransactionManager",
//        basePackages = {"pe.gob.onpe.adan.repository.adan"})
//public class AdanHibernateConfig {
//
//    @Bean
//    public JpaVendorAdapter jpaVendorAdapter() {
//        HibernateJpaVendorAdapter hibernateJpaVendorAdapter = new HibernateJpaVendorAdapter();
//        return hibernateJpaVendorAdapter;
//    }
//
//    @Bean(name = "adanDataSource")
//    public DataSource dataSource() {
//        DriverManagerDataSource dataSource = new DriverManagerDataSource();
//        dataSource.setDriverClassName("oracle.jdbc.OracleDriver");
//        dataSource.setUrl("jdbc:oracle:thin:@192.168.49.50:1521:BDCONS");
//        dataSource.setUsername("ADAN_ADMIN");
//        dataSource.setPassword("ADAN_ADMIN");
//        return dataSource;
//    }
//
//    @Bean(name = "adanEntityManagerFactory")
//    public LocalContainerEntityManagerFactoryBean entityManagerFactory(){
//        LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
//        factoryBean.setDataSource(dataSource());
//        factoryBean.setPackagesToScan("pe.gob.onpe.adan.model.adan");
//        factoryBean.setJpaProperties(hibernateProperties());
//        factoryBean.setJpaVendorAdapter(jpaVendorAdapter());
//                
//        return factoryBean;
//    }
//    
//    private Properties hibernateProperties(){
//        Properties properties = new Properties();
//        properties.put("hibernate.dialect", "org.hibernate.dialect.Oracle10gDialect");
//        properties.put("hibernate.show_sql", true);
//        properties.put("hibernate.format_sql", true);
//        return properties;
//    }
//
//    @Bean(name = "adanTransactionManager")
//    public PlatformTransactionManager adanTransactionManager(EntityManagerFactory emf) {
//        JpaTransactionManager txManager = new JpaTransactionManager();
//        txManager.setEntityManagerFactory(entityManagerFactory().getObject());
//        return txManager;
//    }
//}

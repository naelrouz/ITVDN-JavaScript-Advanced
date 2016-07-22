<div class="site-branding">

    <?php
    twentyfifteen_the_custom_logo();

    if (is_front_page() && is_home()) : ?>
        <h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
        </h1>
    <?php else : ?>
        <p class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
        </p>
    <?php endif;

    $description = get_bloginfo('description', 'display');
    if ($description || is_customize_preview()) : ?>
        <p class="site-description"><?php echo $description; ?></p>
    <?php endif;
    ?>
    <button class="secondary-toggle"><?php _e('Menu and widgets', 'twentyfifteen'); ?></button>
</div><!-- .site-branding
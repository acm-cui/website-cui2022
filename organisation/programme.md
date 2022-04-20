---
label: Programme Committee
description: The Programme Committee for the !!conference.year!! !!conference.full_name!! conference.

menus:
  organisation:
    title: Programme Committee
    alt: Members of our community who are volunteering to support the peer review process of !!conference.short_name!! !!conference.year!!.
    weight: 1
---

# Programme Committee

The following people are members of the {{ site.conference.short_name }} {{ site.conference.year }} Programme Committee:

{% assign num_pc_members = site.data.pc | size %}
{% assign half_num_pc_members = num_pc_members | plus: 1 %}
{% assign half_num_pc_members = half_num_pc_members | divided_by: 2 %}

<div class="row">
	<div class="col-lg-6 col-12">
		<ul class="list-unstyled pls-0 mb-0">
            {% for pc_member in site.data.pc offset:0 limit:half_num_pc_members %}
                <li class="pb-1">{{ pc_member.name }}<br><em class="text-muted small">{{ pc_member.institution }}, {{ pc_member.country }}</em></li>
            {% endfor %}
		</ul>
	</div>

	<div class="col-lg-6 col-12">
		<ul class="list-unstyled pls-0 mb-0">
            {% for pc_member in site.data.pc offset:half_num_pc_members %}
                <li class="pb-1">{{ pc_member.name }}<br><em class="text-muted small">{{ pc_member.institution }}, {{ pc_member.country }}</em></li>
            {% endfor %}
		</ul>
	</div>
</div>